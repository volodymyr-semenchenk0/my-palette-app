import React from "react";
import { createBrowserRouter } from "react-router-dom";

import PaletteTable from "./components/PaletteTable.jsx";
import PaletteDetails from "./components/PaletteDetails.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";

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
        path: "palette/:id",
        element: <PaletteDetails />
    }
]);

export default router;

