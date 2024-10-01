// import React from 'react';
// import TeamOnClickHeroComponent from './components/hero_section/hero';
// import TeamOnClickSkillsComponent from './components/skills/skills';
// import './team.css';

// const TeamPage = () => {
//   return (
//     <div className="about-page">
//       <TeamOnClickHeroComponent />
//       <TeamOnClickSkillsComponent />
//     </div>
//   );
// };

// export default TeamPage;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TeamOnClickHeroComponent from './components/hero_section/hero';
import TeamOnClickSkillsComponent from './components/skills/skills';
import './team.css';

// The existing component structure
const TeamPage = () => {
  // Use useParams to get the member's ID from the URL
  const { id } = useParams();

  // State to hold the fetched member data
  const [member, setMember] = useState(null);

  // Loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch the member's data from the backend based on the ID
  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        // Replace with your backend API endpoint
        const response = await axios.get(`https://staruthwebsite-api.vercel.app/teams/getTeamMember/${id}`);
        setMember(response.data); // Store the fetched member data
      } catch (err) {
        setError('Failed to fetch member data');
        console.error("Error fetching team member data:", err); // Log the error for debugging
      } finally {
        setLoading(false); // Set loading to false after the request is complete
      }
    };

    // Call the fetch function
    fetchMemberData();
  }, [id]);  // Re-run the effect when the ID changes
  console.log(member)

  // If the data is still loading, show a loading message
  if (loading) {
    return <div>Loading member details...</div>;
  }

  // If there's an error, show an error message
  if (error) {
    return <div>{error}</div>;
  }

  // If the member is not found, show a "Not found" message
  if (!member) {
    return <div>Member not found</div>;
  }

  // Render the fetched member's details
  return (
    <div className="about-page">
      <TeamOnClickHeroComponent member={member} />
      <TeamOnClickSkillsComponent member={member} />
    </div>
  );
};

export default TeamPage;
