import { createTheme } from "@mui/material";

/* Tailwind breakpoints for consistency */
declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true;
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
                xs: 0,
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
            }
        }
    }
);

export { theme };
