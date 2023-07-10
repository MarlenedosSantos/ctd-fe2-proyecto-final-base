import { useEffect, useState } from "react";
import { obtenerInformacion } from "./noticiasutil";
import Modal from "./Modal";
import { INoticiasNormalizadas } from "./noticiastypes";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
  BotonLectura
} from "./styled";


const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [showModal, setShowModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    obtenerInformacion(setNoticias);
  }, []);

  const suscribirModal = () => {
    setTimeout(() => {
      alert("Suscripto!");
      setShowModal(null);
    }, 1000);
  };
  const abrirNoticia = (noticia: INoticiasNormalizadas) => {
    setShowModal(noticia);
  };

  const cerrarModal = () => {
    setShowModal(null);
  };

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={noticia.imagen} />
            <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {noticia.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => abrirNoticia(noticia)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
       
       <Modal showModal={showModal} cerrar={cerrarModal} suscribir={suscribirModal} />

      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
