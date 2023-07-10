import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { BioContainer, ButtonsContainer, BioImage, BioDescription, BioButton, BioName } from "./stylesmodule";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BioButton
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={bioActiva.id === nombre ? true : false}
      >
        {nombre}
      </BioButton>
    ));
  };

  return (
    <BioContainer>
      <ButtonsContainer>{crearBotones()}</ButtonsContainer>
      <div>
        <div>
          <BioImage
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <BioName>{bioActiva.nombre}</BioName>
          <BioDescription>{bioActiva.descripcion}</BioDescription>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
