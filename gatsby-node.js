exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
            allStrapiPaginas {
                nodes {
                    nombre
                    id
                    slug
                }
            }
            allStrapiPropiedades {
                nodes {
                    nombre
                    id
                    slug
                }
            }
        }
    `);

    // Si no hay resultados
    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    // Si hay resultados generar los archivos estaticos
    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;

    // crear los templates para paginas
    paginas.forEach( pagina => {
        actions.createPage({
            path: pagina.slug,
            component: require.resolve('./src/components/Paginas.js'),
            context: {
                id: pagina.id
            }
        })
    });

    // Crear los templates de propiedades
    propiedades.forEach( propiedad => {
        actions.createPage({
            path: propiedad.slug,
            component: require.resolve('./src/components/Propiedades.js'),
            context: {
                id: propiedad.id
            }
        });
    });
} 
