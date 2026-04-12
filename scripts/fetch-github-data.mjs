// scripts/fetch-github-data.mjs
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "../lib/github-data.json");
const USERNAME = "OG-Owen";
const TOKEN = process.env.GH_PAT;

if (!TOKEN) {
  console.error("GH_PAT environment variable is required");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

/** Fetch pinned repos via GraphQL — preserves pin order */
async function fetchPinnedRepos() {
  const query = `
    query {
      user(login: "${USERNAME}") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              primaryLanguage { name }
              stargazerCount
              forkCount
              repositoryTopics(first: 10) {
                nodes { topic { name } }
              }
              pushedAt
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const { data, errors } = await res.json();
  if (errors) throw new Error(`GraphQL errors: ${JSON.stringify(errors)}`);

  return data.user.pinnedItems.nodes.map((repo) => ({
    name: repo.name,
    description: repo.description ?? null,
    url: repo.url,
    homepage: repo.homepageUrl ?? null,
    language: repo.primaryLanguage?.name ?? null,
    stars: repo.stargazerCount,
    forks: repo.forkCount,
    topics: repo.repositoryTopics.nodes.map((n) => n.topic.name),
    isPinned: true,
    pushedAt: repo.pushedAt,
  }));
}

/** Fetch all public repos via REST API */
async function fetchAllPublicRepos() {
  const repos = [];
  let page = 1;

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?type=public&per_page=100&page=${page}&sort=pushed`,
      { headers }
    );

    if (!res.ok) {
      throw new Error(`REST request failed: ${res.status} ${res.statusText}`);
    }

    const batch = await res.json();
    if (batch.length === 0) break;

    repos.push(
      ...batch.map((repo) => ({
        name: repo.name,
        description: repo.description ?? null,
        url: repo.html_url,
        homepage: repo.homepage ?? null,
        language: repo.language ?? null,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        topics: repo.topics ?? [],
        isPinned: false,
        pushedAt: repo.pushed_at,
      }))
    );

    if (batch.length < 100) break;
    page++;
  }

  return repos;
}

async function main() {
  console.log("Fetching pinned repos...");
  const pinned = await fetchPinnedRepos();
  console.log(`  Found ${pinned.length} pinned repos`);

  console.log("Fetching all public repos...");
  const allPublic = await fetchAllPublicRepos();
  console.log(`  Found ${allPublic.length} public repos`);

  // Pinned first, then non-pinned public repos sorted by pushedAt desc
  const pinnedNames = new Set(pinned.map((r) => r.name));
  const rest = allPublic
    .filter((r) => !pinnedNames.has(r.name))
    .sort((a, b) => new Date(b.pushedAt) - new Date(a.pushedAt));

  const combined = [...pinned, ...rest];

  writeFileSync(OUTPUT_PATH, JSON.stringify(combined, null, 2));
  console.log(`Wrote ${combined.length} repos to lib/github-data.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
