import React from "react";
import { createBrowserRouter } from "react-router-dom";

import PaletteTable from "./components/PaletteTable.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";
import DetailedPaletteLayout from "./layouts/DetailedPaletteLayout.jsx";
import PaletteDetails from "./components/PaletteDetails/PaletteDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                index: true,
                element: <PaletteTable />
            },
        ]
    },
    {
        path: "/palette/:id",
        element: <DetailedPaletteLayout />,
        children: [
            {
                index: true,
                element: <PaletteDetails/>
            },
        ]
    }
]);

export default router;

