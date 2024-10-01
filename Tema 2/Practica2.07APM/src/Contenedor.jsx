import "./Contenedor.css";

const Contenedor = (props) => {
    //Javascript
    const { children } = props;

    return(
        //JSX
        //Recomendable poner en las clases/id el nombre del componente y 
        //después el nombre que le quieras porner a esa clase/id.
        <>
        
        <div className="contenedor-contenedor">{children}</div>
        

        </>
    );

};

export default Contenedor;