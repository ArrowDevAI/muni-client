const LeaderboardView = () => {
    const handleGoogleAuth = () => {
      window.location.href = "http://localhost:3000/auth/google"; 
    };
  
    return (
      <>
        <button onClick={handleGoogleAuth}>Authenticate with Google</button>
      </>
    );
  };
  
  export default LeaderboardView;
  