import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    nombre
                    descripcion
                    id
                    precio
                    estacionamiento
                    bathrooms
                    habitaciones
                    categorias {
                        nombre
                    }
                    agentes {
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid( maxWidth: 600, maxHeight: 400 ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }   
            }
        }
    `);

    return resultado.allStrapiPropiedades.nodes.map( propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        id: propiedad.id,
        precio: propiedad.precio,
        estacionamiento: propiedad.estacionamiento,
        bathrooms: propiedad.bathrooms,
        habitaciones: propiedad.habitaciones,
        agentes: propiedad.agentes,
        precio: propiedad.precio,
        categoria: propiedad.categorias,
        imagen: propiedad.imagen
    }));

};


export default usePropiedades;
