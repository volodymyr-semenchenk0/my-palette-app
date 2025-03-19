import PaletteTable from "../components/PaletteTable.jsx";
import PaletteDetails from "../components/PaletteDetails.jsx";
import Layout from "../components/Layout.jsx";

export const routesList = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <PaletteTable /> },
        ],
    },
    {
        path: "palette/:id",
        element: <PaletteDetails />
    }
]

