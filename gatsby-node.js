exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
        query {
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
    // const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;

    // crear los templates para paginas
    // paginas.forEach( pagina => {
    //     actions.createPage({
    //         path: urlSlug( pagina.nombre ),
    //         component: require.resolve('./src/components/paginas.js'),
    //         context: {
    //             id: pagina.id
    //         }
    //     })
    // });

    // Crear los templates de propiedades
    propiedades.forEach( propiedad => {
        actions.createPage({
            path: propiedad.slug,
            component: require.resolve('./src/components/propiedades.js'),
            context: {
                id: propiedad.id
            }
        });
    });
} 
