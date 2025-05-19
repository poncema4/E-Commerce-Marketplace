import configPromise from '@payload-config'
import { getPayload } from 'payload'

/**
 * Asynchronously renders a JSON-formatted list of categories from the Payload CMS.
 *
 * Retrieves all entries from the 'categories' collection and displays the result as formatted JSON within a React server component.
 *
 * @returns A JSX element containing the stringified categories data.
 */
export default async function Home() {

  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'categories',
  })
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};