export const generateRaffleMatches = (users) => {
    if (users.length < 2) {
      throw new Error('At least two users are required for the raffle.');
    }
  
    const shuffledUsers = [...users].sort(() => Math.random() - 0.5);
  
    return shuffledUsers.map((user, index) => ({
      giver: user,
      receiver: shuffledUsers[(index + 1) % shuffledUsers.length],
    }));
  };
  