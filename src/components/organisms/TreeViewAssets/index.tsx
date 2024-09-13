import Accordion from "../../atoms/Accordion";

const treeDataMock = [
  {
    name: "Root",
    children: [
      {
        name: "Location A",
        children: [
          {
            name: "Asset 1",
            children: [{ name: "Component A1" }, { name: "Component A2" }],
          },
          {
            name: "Asset 2",
            children: [{ name: "Component B1" }, { name: "Component B2" }],
          },
        ],
      },
      {
        name: "Location B",
        children: [
          {
            name: "Location C",
            children: [
              {
                name: "Asset 3",
                children: [{ name: "Component C1" }, { name: "Component C2" }],
              },
              { name: "Component D1" },
            ],
          },
        ],
      },
      { name: "Component X" },
    ],
  },
];

function TreeViewAssets() {
  return (
    <div className="border basis-1/3 rounded-sm flex flex-col">
      <input placeholder="search" />
      {treeDataMock.map((item, index) => (
        <Accordion key={index} node={item} />
      ))}
    </div>
  );
}

export default TreeViewAssets;
