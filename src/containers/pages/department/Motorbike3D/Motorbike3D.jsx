import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { MeshStandardMaterial, Color } from 'three';
import { Group } from 'three';

const Motorbike3D = () => {
  const [model, setModel] = useState(null);
  const buttonRef1 = useRef(null); // Ref for the first button mesh
  const buttonRef2 = useRef(null); // Ref for the second button mesh
  const [buttonHovered1, setButtonHovered1] = useState(false); // State to track hover state for the first button
  const [buttonHovered2, setButtonHovered2] = useState(false); // State to track hover state for the second button
  const [buttonClicked, setButtonClicked] = useState(null); // State to track which button is clicked
  const [buttonDescription, setButtonDescription] = useState(''); // State to store the description for the clicked button

  useEffect(() => {
    const fbxLoader = new FBXLoader();

    // Load the .fbx model from the public folder
    fbxLoader.load('/3D-motorbike/veiculo.fbx', (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = new MeshStandardMaterial({
            color: 0xaaaaaa, // Use a light gray color
            roughness: 0.5,
            metalness: 0.5,
          });
        }
      });

      object.scale.set(0.014, 0.014, 0.014); // Scale the model
      const group = new Group();
      group.add(object);

      group.position.set(0, 0, 0); // Adjust model's position

      setModel(group);  // Set the model
    });
  }, []);

  // Handle button click event for both buttons
  const handleButtonClick = (buttonId, description) => {
    setButtonClicked(buttonId); // Set the button clicked state
    setButtonDescription(description); // Set the description based on the button clicked
  };

  return (
    <div style={{ height: '100vh' }}>
      {/* Notification Box (Conditionally Rendered) */}
      {buttonClicked && (
        <div
          style={{
            position: 'absolute',
            top: '20vh',
            left: '2%', // Centers the box horizontally
            backgroundColor: 'var(--color-gray)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            borderBottomRightRadius: '25px',
            fontSize: '2rem',
            zIndex: 1000,
          }}
        >
          {buttonClicked === 1 ? 'Kunstofftechnik' : 'Elektrotechnik'}
        </div>
      )}

      {/* Button Description (Conditionally Rendered) */}
      {buttonClicked && (
        <div
          style={{
            position: 'absolute',
            top: '30vh', // Slightly below the notification box
            left: '2%',
            backgroundColor: 'var(--color-gray)',
            color: 'white',
            width: '30vw',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '1rem',
            zIndex: 1000,
          }}
        >
          <p>{buttonDescription}</p> {/* Display the description for the clicked button */}
        </div>
      )}

      <Canvas
        camera={{ position: [3, -5, 0], fov: 50 }}
        style={{ height: '100vh', width: '100%' }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={3} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={2} decay={2} />

        {/* Render motorbike model if loaded */}
        {model && <primitive object={model} />}

        {/* First Button */}
        <mesh
          ref={buttonRef1}
          position={[1.5, 0, 2]} // Position the button in front of the motorbike
          onClick={() =>
            handleButtonClick(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
          } // Pass the description when button 1 is clicked
          onPointerOver={() => setButtonHovered1(true)} // Hover state
          onPointerOut={() => setButtonHovered1(false)} // Hover state
        >
          <planeGeometry args={[2, 0.5]} />
          <meshStandardMaterial
            color={buttonHovered1 ? 0xf1f1f1 : 0xf1f1f1}
            emissive={buttonHovered1 ? new Color(1, 0, 0) : new Color(0, 0, 0)}
            transparent={true}
            opacity={0.8}
            side={2}
            wireframe={false}
            depthWrite={false}
            metalness={0.5}
            roughness={0.5}
          />
          <Text
            position={[0, 0, 0.05]}
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Kunstofftechnik
          </Text>
        </mesh>

        {/* Second Button */}
        <mesh
          ref={buttonRef2}
          position={[1, -1, 1.3]} // Position the button in front of the motorbike, slightly lower than the first button
          onClick={() =>
            handleButtonClick(2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel orci mollis, viverra lorem quis, suscipit tortor.')
          } // Pass the description when button 2 is clicked
          onPointerOver={() => setButtonHovered2(true)} // Hover state
          onPointerOut={() => setButtonHovered2(false)} // Hover state
        >
          <planeGeometry args={[2, 0.5]} />
          <meshStandardMaterial
            color={buttonHovered2 ? 0xf1f1f1 : 0xf1f1f1}
            emissive={buttonHovered2 ? new Color(1, 0, 0) : new Color(0, 0, 0)}
            transparent={true}
            opacity={0.8}
            side={2}
            wireframe={false}
            depthWrite={false}
            metalness={0.5}
            roughness={0.5}
          />
          <Text
            position={[0, 0, 0.05]}
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Elektrotechnik
          </Text>
        </mesh>

        {/* Keep the buttons facing the camera */}
        {buttonRef1.current && buttonRef1.current.lookAt(0, 0, 0)}
        {buttonRef2.current && buttonRef2.current.lookAt(0, 0, 0)}

        <OrbitControls
          enableZoom={true}
          maxDistance={10}
          minDistance={3}
          maxPolarAngle={Math.PI / 2}
          enableRotate={true}
          target={model ? model.position : [0, 0, 0]}
        />
      </Canvas>
    </div>
  );
};

export default Motorbike3D;
