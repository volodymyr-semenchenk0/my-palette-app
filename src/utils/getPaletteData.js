import paletteData from "../data/palette.json"

export const getAllPalette = () => {
    return paletteData;
}

export const getPaletteById = (id) => {
    if (!id) return null;

    return paletteData.find(palette => palette.id === id) || null;
}

