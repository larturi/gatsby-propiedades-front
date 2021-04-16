import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './PropiedadPreview';

const Ul = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 5rem auto;

    @media (min-width: 480px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2rem;
            column-gap: 2rem;
    }

    @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
    }
`;

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [ propiedades, setPropiedades ] = useState([]);

    useEffect(() => {
        setPropiedades(resultado);
    }, []);

    return (
        <div>
            <h2
                css={css`
                    margin-top: 5rem;
                `}
            >Nuestras Propiedades</h2>

            <Ul>
                {
                    propiedades.map( propiedad => (
                        <PropiedadPreview 
                            key={propiedad.id}
                            propiedad={propiedad}
                        />
                    ))
                }
            </Ul>
        </div>
    )
};

export default ListadoPropiedades;
