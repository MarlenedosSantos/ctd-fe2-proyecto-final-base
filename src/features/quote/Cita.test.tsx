import { render, screen } from "../../test-utils";
import { server } from "../../mocks/server";
import Cita from "./Cita";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Testeando componente Cita", () => {
  test("Mostrar el mensaje: No se encontró ninguna cita", () => {
    render(<Cita />);
    expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument();
  });

  test("Mostrar el placeholder: Ingresa el nombre del autor, en el input", () => {
    render(<Cita />);
    expect(
      screen.getByPlaceholderText("Ingresa el nombre del autor")
    ).toBeInTheDocument();
  });

  test("Mostrar la leyenda: CARGANDO...", async () => {
    render(<Cita />);
    const button = screen.getByText("Obtener cita aleatoria");
    userEvent.click(button);
    expect(await screen.findByText("CARGANDO...")).toBeInTheDocument();
  });

  test("Mostrar una cita aleatoria", async () => {
    render(<Cita />);
    const button = screen.getByText("Obtener cita aleatoria");
    userEvent.click(button);
    await waitFor(() => expect(screen.queryByText("Duffman")));
  });

  test("Mostrar una cita de Milhouse Van Houten", async () => {
    render(<Cita />);
    const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
    await userEvent.type(input, "Milhouse");
    const button = screen.getByText("Obtener Cita");
    await userEvent.click(button);
    await waitFor(() => expect(screen.queryByText("Milhouse Van Houten")));
  });

  test("Mostrar mensaje 'Por favor ingrese un nombre válido' al ingresr números", async () => {
    render(<Cita />);
    const input = screen.getByPlaceholderText('Ingresa el nombre del autor');
    await userEvent.type(input, '123456');
    const button = screen.getByText('Obtener Cita');
    await userEvent.click(button);
    expect(await screen.findByText('Por favor ingrese un nombre válido')).toBeInTheDocument();
  });

});