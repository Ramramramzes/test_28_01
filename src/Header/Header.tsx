import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Icons } from '../Icons';
import { HeaderModal } from './HeaderModal/HeaderModal';


export default function Header() {
  const { Logo, Person } = Icons
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [modalOpen, setModalOpen] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const HandleModalClose = () => {
    setModalOpen(false)
  }

  const HandleModalOpen = () => {
    setModalOpen(true)
  }

  return (
    <>
      <AppBar sx={{ backgroundColor: 'white', boxShadow: 'none' }} elevation={0}>
        <Container >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <Logo/>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                onMouseEnter={handleMenuOpen}
                sx={{ color: '#1A1A1A', display: 'flex', alignItems: 'center' }}
              >
                О нас <KeyboardArrowDownIcon />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{
                  onMouseLeave: handleMenuClose,
                }}
                
              >
                <MenuItem onClick={handleMenuClose}>Кто мы</MenuItem>
                <MenuItem onClick={handleMenuClose}>Наша миссия</MenuItem>
                <MenuItem onClick={handleMenuClose}>Контакты</MenuItem>
              </Menu>

              <Button sx={{ color: '#1A1A1A' }}>Услуги и цены</Button>
              <Button sx={{ color: '#1A1A1A' }}>Предметы</Button>
              <Button sx={{ color: '#1A1A1A' }}>Бонусы</Button>
              <Button sx={{ color: '#1A1A1A' }}>Блок</Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button sx={{ color: '#7B64FF', display: 'flex', alignItems: 'center' }}>
                Войти <Person />
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: '#FFDE00', color: '#1A1A1A' }}
                onClick={HandleModalOpen}
              >
                Проконсультироваться
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <HeaderModal 
        open={modalOpen}
        onClose={HandleModalClose}/>
    </>
  );
}