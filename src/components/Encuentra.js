import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image';

const ImagenBackground = styled(BackgroundImage)`
    height: 300px;
`;

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file (relativePath: { eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid( maxWidth: 1500 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <ImagenBackground
         Tag="section"
         fluid={imagen.sharp.fluid}
         fadeIn="soft"
        >
            <div
                css={css`
                color: #FFF;
                height: 100%;
                max-width: 1200px;
                display: flex;
                margin: 0 auto;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            `}
            >
                <h3 css={css`
                     font-size: 4rem;
                     margin: 0;
                     max-width: 800px;

                        @media (min-width: 992px) {
                            .titulo {
                                font-size: 4rem;
                            }
                        }
                     `}
                >Encuentra la casa de tus sueños</h3>
                <p>15 años de experiencia</p>
            </div>
        </ImagenBackground>
    )
};

export default Encuentra;
