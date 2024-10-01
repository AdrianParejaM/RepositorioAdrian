import "./Interprete.css";

const Interprete = (props) => {
//<img src="https://thumbs.dreamstime.com/z/hombre-feo-elegante-48706154.jpg" alt="Feo" />
    const {children, nombre, foto} = props;

    return (
        <>
        
            <div className="interprete-contenedor">
                <img src={foto} alt="Feo" />
                <h1>{nombre}</h1>
                <h3>{children}</h3>
            </div>

        </>
    );
    
};

export default Interprete;