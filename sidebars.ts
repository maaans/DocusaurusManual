import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "folder-1",
      items: [
        "user-guide/folder-1/pengaturan",
        {
          type: "category",
          label: "folder-2",
          items: ["user-guide/folder-1/folder-2/pengaturan"],
          customProps: {
            description: "User Guide Exercise",
          },
        },
      ],
    },
  ],
};

export default sidebars;
