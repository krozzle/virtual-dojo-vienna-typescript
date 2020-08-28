/** @jsx jsx */
// enables theme-ui in <jsx>
import { useState } from 'react';
import Modal from 'react-modal';
import { jsx, Box, Input, Button, Flex, Textarea } from 'theme-ui';

const Contact = () => {
  const [modalIsOpen, SetModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      position: 'fixed',
      width: '45vw',
      maxHeight: '70vh',
      top: '50vh',
      left: '50vw',
      right: 'auto',
      bottom: 'auto',
      zIndex: '100',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('body');
  return (
    // todo put the styles in theme.js
    <>
      <Button
        sx={{
          backgroundColor: 'primary',
          minHeight: '2em',
          maxHeight: '2em',
          fontSize: '2',
          cursor: 'pointer',
          // borderRadius: '30%',
        }}
        onClick={() => SetModalIsOpen(true)}
      >
        Contact
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => SetModalIsOpen(false)}
        style={customStyles}
      >
        <Flex
          sx={{
            // position: 'fixed',

            opacity: 0.9,
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>Contact us</h2>
          <Button
            onClick={() => SetModalIsOpen(false)}
            sx={{
              maxHeight: '2.5em',
              maxWidth: '2.5em',
              alignContent: 'center',
            }}
          >
            &times;
          </Button>
        </Flex>
        <Input placeholder="Your email address" />
        <br />
        <Textarea
          variant="modal"
          name="email-us"
          cols="20"
          rows="5"
          placeholder="Talk to us..."
          autoFocus
        />
        <Button sx={{ mt: '0.5em' }}>Submit</Button>
      </Modal>
    </>
  );
};

export default Contact;
