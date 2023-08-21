import { ReactElement } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { SvgIconProps } from "@mui/material";

type passwordIconsType = {
    true: ReactElement<SvgIconProps>;
    false: ReactElement<SvgIconProps>;
}

const passwordIcons: passwordIconsType = {
    true: <VisibilityIcon />,
    false: <VisibilityOffIcon />
}

export { passwordIcons };
