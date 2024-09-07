import React from 'react';
import ButtonsDynamic from '@/components/buttonDynamic/Buttons-dynamic';

const Buttons = () => {
    return (
        <div>
            <h1>Botoncitos:</h1>

            {/* Default Buttons */}
            <ButtonsDynamic type="button" ariaLabel="Small Común" size="small">
                <p>Small Común</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" ariaLabel="Medium Común">
                <p>Medium Común</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" ariaLabel="Large Común" size="large">
                <p>Large Común</p>
            </ButtonsDynamic>

            {/* Success Buttons */}
            <ButtonsDynamic type="button" classType="success" ariaLabel="Small Success" size="small">
                <p>Small Success</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="success" ariaLabel="Medium Success">
                <p>Medium Success</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="success" ariaLabel="Large Success" size="large">
                <p>Large Success</p>
            </ButtonsDynamic>

            {/* Warning Buttons */}
            <ButtonsDynamic type="button" classType="warning" ariaLabel="Small Warning" size="small">
                <p>Small Warning</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="warning" ariaLabel="Medium Warning">
                <p>Medium Warning</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="warning" ariaLabel="Large Warning" size="large">
                <p>Large Warning</p>
            </ButtonsDynamic>

            {/* Danger Buttons */}
            <ButtonsDynamic type="button" classType="danger" ariaLabel="Small Danger" size="small">
                <p>Small Danger</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="danger" ariaLabel="Medium Danger">
                <p>Medium Danger</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="danger" ariaLabel="Large Danger" size="large">
                <p>Large Danger</p>
            </ButtonsDynamic>

            {/* Info Buttons */}
            <ButtonsDynamic type="button" classType="info" ariaLabel="Small Info" size="small">
                <p>Small Info</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="info" ariaLabel="Medium Info">
                <p>Medium Info</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="info" ariaLabel="Large Info" size="large">
                <p>Large Info</p>
            </ButtonsDynamic>

            {/* Dark Buttons */}
            <ButtonsDynamic type="button" classType="dark" ariaLabel="Small Dark" size="small">
                <p>Small Dark</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="dark" ariaLabel="Medium Dark">
                <p>Medium Dark</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="dark" ariaLabel="Large Dark" size="large">
                <p>Large Dark</p>
            </ButtonsDynamic>

            {/* Light Buttons */}
            <ButtonsDynamic type="button" classType="light" ariaLabel="Small Light" size="small">
                <p>Small Light</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="light" ariaLabel="Medium Light">
                <p>Medium Light</p>
            </ButtonsDynamic>

            <ButtonsDynamic type="button" classType="light" ariaLabel="Large Light" size="large">
                <p>Large Light</p>
            </ButtonsDynamic>
        </div>
    );
};

export default Buttons;
