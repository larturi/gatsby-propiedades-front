import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    nombre
                    descripcion
                    id
                    slug
                    precio
                    estacionamiento
                    bathrooms
                    habitaciones
                    categoria {
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
        categoria: propiedad.categoria,
        imagen: propiedad.imagen,
        slug: propiedad.slug
    }));

};


export default usePropiedades;
