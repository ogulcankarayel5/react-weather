import React from 'react'

import styles from "pages/Home/components/sides/left/autocomplete/autocomplete.module.scss";

interface IAutocompleteItemProps {
    name: string;
    onClick: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
}
export const AutocompleteItem = ({name, onClick}: IAutocompleteItemProps) => {
    return (
        <p className={styles.autocompleteItem} onClick={onClick}>
            {name}
        </p>
    )
}
