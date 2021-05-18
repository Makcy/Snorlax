import { useState} from 'react'
import { Page } from 'components'

function Post() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Page inner>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Page>
  );
}

// Role.propTypes = {
// }

export default Post