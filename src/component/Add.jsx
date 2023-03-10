import {
  Box,
  Button,
  Fab,
  Modal,
  Tooltip,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import { DateRange, EmojiEmotions } from "@mui/icons-material";

export const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
  });
  return (
    <div>
      <Tooltip
        onClick={handleOpen}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Button></Button>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              alt="Trevor Henderson"
              src="https://material-ui.com/static/images/avatar/5.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Ngọc Na
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            label="Multiline"
            s
            multiline
            rows={4}
            placeholder="Bạn nghĩ gì ?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <ImageIcon color="secondary" />
            <VideoChatIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};
