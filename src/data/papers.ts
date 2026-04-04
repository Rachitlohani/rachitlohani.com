export type Paper = { title: string; url: string; tags?: string[] };

export const papers: Paper[] = [
  {
    title:
      "Artificial Intelligence as a Structural General-Purpose Technology: Endogenous Wage Distribution, Infrastructure Constraints, and Institutional Realignment",
    url: "/papers/endogenous-wage-distribution/",
    tags: ["ai"]
  },
  { title: "Google File System (GFS)", url: "/papers/gfs-sosp2003.pdf" },
  { title: "MapReduce", url: "/papers/mapreduce-osdi04.pdf" },
  { title: "Dynamo: Amazon’s Highly Available Key-Value Store", url: "/papers/amazon-dynamo-sosp2007.pdf" },
  { title: "Spanner: Google’s Globally-Distributed Database", url: "/papers/spanner-osdi2012.pdf" },
  { title: "Kafka: A Distributed Messaging System", url: "/papers/Kafka.pdf" },
  { title: "Google Cluster Scheduler (Borg/Omega) — Hamilton", url: "/papers/paper-hamilton.pdf" },
  { title: "Zanzibar: Google’s Consistent, Global Authorization System", url: "/papers/atc19-pang.pdf" },
  { title: "Large-scale cluster management at Google with Borg", url: "/papers/43438.pdf" },
  { title: "TurboQuant", url: "/papers/turboquant.pdf" },
  { title: "Zep - memory and context graph", url: "/papers/zep.pdf" }

];
