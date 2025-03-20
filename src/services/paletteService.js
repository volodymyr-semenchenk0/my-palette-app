import paletteData from  "../data/palette.json"

class PaletteService  {

    getAllPalette() {
        return paletteData;
    }

    getPaletteById(id) {
        if (!id) return null;

        return paletteData.find(palette=> palette.id === id) || null;
    }
}

const paletteService = new PaletteService();
export default paletteService;