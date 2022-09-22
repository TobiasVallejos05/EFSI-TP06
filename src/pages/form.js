export default function Form() {
    return (
        <form action="/">
            <input type="text" name="Nombre" placeholder="Nombre" />
            <input type="text" name="Apellido" placeholder="Apellido" />
            <input type="number" name="Edad" placeholder="Edad" />
            <input type="text" name="Email" placeholder="Email" />
            <input type="submit" />
        </form>
    )
}