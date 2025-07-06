import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: NextPage = () => (
  <main className="p-8 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-8">Welcome to ALX Listing App</h1>
    <Card
      title="Sample Property"
      description="A nice place to stay in the city."
      imageUrl="/assets/sample.jpg"
    />
    <Button className="mt-4">Book Now</Button>
  </main>
);

export default Home;
