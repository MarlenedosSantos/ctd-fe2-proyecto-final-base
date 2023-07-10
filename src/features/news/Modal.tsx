import { PropsModal } from "./noticiastypes";
import { SuscribeImage, CloseButton as Close } from "../../assets";
import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal,TarjetaModal, TituloModal } from "./styled";


const Modal = ({ showModal, cerrar, suscribir }: PropsModal) => {
  const esPremium = showModal?.esPremium;
  return showModal !== null ? (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={cerrar}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal
          src={esPremium ? SuscribeImage : showModal.imagen}
          alt={esPremium ? "mr-burns-excelent" : "news-image"}
        />
        <CotenedorTexto>
          <TituloModal>
            {esPremium ? "Suscribete a nuestro newsletter" : showModal.titulo}
          </TituloModal>
          <DescripcionModal>
            {esPremium
              ? "Suscribete a nuestro newsletter y recibi noticias de tus personajes favoritos."
              : showModal.descripcion}
          </DescripcionModal>
          {esPremium ? (
            <BotonSuscribir onClick={suscribir}>
              Suscríbete
            </BotonSuscribir>
          ) : null}
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  ) : null;
};

export default Modal;