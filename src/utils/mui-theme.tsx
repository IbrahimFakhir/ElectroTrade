import { createTheme } from "@mui/material";

/* Tailwind breakpoints for consistency */
declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: false; // removes the `xs` breakpoint
		sm: true;
		md: true;
		lg: true;
		xl: true;
	}
}

const theme = createTheme(
    {
        palette: {
            grey: {
                500: "#DCDCDC",
            }
        },
        breakpoints: {
            values: {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
            }
        }
    }
);

export { theme };
