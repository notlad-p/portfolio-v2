import { useProgress, Html } from '@react-three/drei';

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <Html center style={{ color: 'red', backgroundColor: 'blueviolet' }} >
      {progress} % loaded
    </Html>
  )
}

export default Loader
