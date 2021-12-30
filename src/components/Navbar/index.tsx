import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    CssBaseline,
    Dialog,
    Fab,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ElevationScroll, ScrollTop, Transition } from '../ScrollUp';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

export const Navbar = (props: Props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar>
                    <Container style={{ padding: 0 }}>
                        <Toolbar
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography variant="h6" component="div">
                                App Name
                            </Typography>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                                onClick={handleClickOpen}
                            >
                                <MenuIcon fontSize="large" />
                            </IconButton>

                            <Dialog
                                fullScreen
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Transition}
                            >
                                <AppBar sx={{ position: 'relative' }}>
                                    <Toolbar>
                                        <Typography
                                            sx={{ ml: 2, flex: 1 }}
                                            variant="h6"
                                            component="div"
                                        >
                                            Burger Menu
                                        </Typography>
                                        <Button
                                            autoFocus
                                            color="inherit"
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize="large" />
                                        </Button>
                                    </Toolbar>
                                </AppBar>
                            </Dialog>

                            <Stack
                                direction="row"
                                spacing={8}
                                sx={{ display: { xs: 'none', md: 'flex' } }}
                            >
                                <Typography variant="body1" component="p">
                                    Contact
                                </Typography>
                                <Typography variant="body1" component="p">
                                    About
                                </Typography>
                            </Stack>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box sx={{ my: 2 }}>
                    {[...new Array(112)]
                        .map(
                            () => ` Cras mattis consectetur purus sit amet fermentum.
                                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                        )
                        .join('\n')}
                </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab
                    color="primary"
                    size="medium"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon fontSize="large" />
                </Fab>
            </ScrollTop>
        </>
    );
};
