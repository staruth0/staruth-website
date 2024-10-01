import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TeamOnClickHeroComponent from './components/hero_section/hero';
import TeamOnClickSkillsComponent from './components/skills/skills';
import './team.css';

const TeamPage = () => {
  const { id } = useParams(); // Get the member's ID from the URL
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios.get(`https://staruthwebsite-api.vercel.app/teams/getTeamMember/${id}`);
        setMember(response.data);
      } catch (err) {
        setError('Failed to fetch member data');
        console.error("Error fetching team member data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberData();
  }, [id]);

  if (loading) {
    return <div>Loading member details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="about-page">
      <TeamOnClickHeroComponent member={member} />
      <TeamOnClickSkillsComponent member={member} />
    </div>
  );
};

export default TeamPage;
