import React from "react";

//TODO: Tipagem do nó da arvore, como deixar ele generico?

//TODO: Preparar objeto formatado

//TODO: Mudar os ícones para componentes Icons

//TODO: Quando não tiver children, clicar para detalhar o Ativo!!

const Accordion = ({ node }) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2">
      <div
        onClick={toggleAccordion}
        className="cursor-pointer font-bold flex items-center gap-2"
      >
        {node.children && (
          <img
            src="/chevron.svg"
            width="11"
            className={`${isOpen ? "rotate-0" : "-rotate-90"}`}
          />
        )}
        {/* TODO: Condicional SVG */}
        <img src="/cube.svg" width="20" />
        {/* <img
            src="/half-cube-icon.svg"
            width="20"
          /> */}
        {/* <img
            src="/map-icon.svg"
            width="20"
          /> */}

        <h4
          className="font-roboto font-medium text-sm text-blue-950 leading-[22px]
        "
        >
          {node.name}
        </h4>

        {/* TODO: Condicional SVG */}
        <img src="/green-circle.svg" width="8" />

        {/* <img
            src="/red-circle.svg"
            width="8"
          />

        <img
            src="/bolt.svg"
            width="8"
          /> */}
      </div>

      {/* Se o nó tiver filhos e o accordion estiver aberto, renderizamos os filhos */}
      {isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <Accordion key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
