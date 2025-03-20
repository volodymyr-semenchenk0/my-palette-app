import React from "react";
import { createBrowserRouter } from "react-router-dom";

import PaletteTable from "./components/PaletteTable.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";
import PaletteDetailsLayout from "./layouts/PaletteDetailsLayout.jsx";

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
        element: <PaletteDetailsLayout />
    }
]);

export default router;

