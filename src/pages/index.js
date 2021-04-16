import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/Layout';
import useInicio from '../hooks/useInicio';
import Encuentra from '../components/Encuentra';
import ListadoPropiedades from '../components/ListadoPropiedades';

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio();

    const { nombre, contenido, imagen } = inicio[0];

     return (
        <Layout>

            <ImagenBackground
                Tag="section"
                fluid={imagen.sharp.fluid}
                fadeIn="soft"
            >
                <div css={css`
                    color: #FFF;
                    height: 100%;
                    max-width: 1200px;
                    display: flex;
                    margin: 0 auto;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                `}>
                    <h1 css={css`
                            font-size: 3rem;
                            margin: 0;
                            max-width: 800px;

                            @media (min-width: 992px) {
                                .titulo {
                                    font-size: 4rem;
                                }
                            }
                    `}> Venta de casas y departamentos exclusivos </h1>
                </div>
            </ImagenBackground>

            <main>
                <div css={css`
                        max-width: 800px;
                        margin: 2rem auto;
                `}>
                    <h1>{nombre}</h1>
                    <p css={css`
                        text-align: center;
                    `}>{contenido}</p>
                </div>
            </main>

            <Encuentra />

            <ListadoPropiedades />

        </Layout>
    )
}

export default Index;