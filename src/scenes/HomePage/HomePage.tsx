import { Hero, Section, SectionList, Form, Container } from "./components";

export default () => {
  return (
    <>
      <Hero />
      <Container>
        <SectionList>
          <Section
            title="Introducing Star Fighter: The Ultimate Space Invaders Game"
            body={
              "Welcome to Star Fighter, the ultimate space invaders game that will transport you to the far reaches of the galaxy. In this fast-paced game, you'll need to defend your spaceship against waves of alien enemies who are trying to take over the universe. With stunning graphics, intuitive controls, and challenging gameplay, Star Fighter is the perfect game for anyone who loves sci-fi and arcade-style action."
            }
          />
          <Section
            title="Your Mission: Save the Galaxy from Alien Invaders"
            body={
              "In Star Fighter, your mission is to save the galaxy from invading alien forces. You'll need to maneuver your spaceship through waves of enemy fire, dodging obstacles and blasting enemies out of the sky. With each level you complete, the challenges will become tougher, the enemies more ruthless, and the stakes higher. But with skill, strategy, and a bit of luck, you can emerge victorious and save the galaxy from destruction."
            }
          />
          <Section
            title="Power-Ups and Upgrades: Enhance Your Star Fighter"
            body={
              "As you progress through the levels of Star Fighter, you'll collect power-ups and upgrades that can enhance your spaceship's abilities. These include shields that protect you from enemy fire, weapons that deal more damage, and speed boosts that make it easier to evade enemy attacks. With each power-up you collect, your chances of survival improve, and you'll be better equipped to take on the toughest challenges."
            }
          />
          <Section
            title="Play Solo or with Friends: Multiplayer Modes"
            body={
              "Star Fighter offers both solo and multiplayer modes, so you can play alone or with friends. In solo mode, you'll tackle the game's challenges on your own, striving to beat your high score and earn your place among the top players. In multiplayer mode, you can team up with other players, working together to defeat the enemy forces and save the galaxy."
            }
          />
          <Section
            title="Immersive Sound and Graphics: A Truly Epic Gaming Experience"
            body={
              "Star Fighter features stunning graphics and immersive sound that will transport you to a galaxy far, far away. With dazzling visual effects, pulse-pounding sound effects, and an epic soundtrack, this game is an audio-visual feast that will keep you engaged and entertained for hours."
            }
          />
          <Section
            title="Leaderboards and Achievements: Compete with Other Players"
            body={
              "In Star Fighter, you can compete with other players from around the world on the game's leaderboards. With each level you complete, you'll earn points and unlock achievements that will boost your standing on the leaderboard. Can you rise to the top and become the ultimate Star Fighter?"
            }
          />
          <Section
            title="Customize Your Ship: Create Your Own Unique Star Fighter"
            body={
              "Star Fighter lets you customize your spaceship, giving you the ability to create your own unique Star Fighter. You can choose from a variety of ships, each with its own strengths and weaknesses, and then outfit it with weapons, shields, and other upgrades to make it the ultimate fighting machine."
            }
          />
          <Section
            title="Join the Star Fighter Community: Get Involved and Stay Connected"
            body={
              "Finally, if you love Star Fighter and want to get more involved, you can join the game's community. With forums, social media groups, and other online resources, you can connect with other players, share tips and tricks, and stay up-to-date on the latest news and updates from the game's developers. So why wait? Join the Star Fighter community today and become part of the action!"
            }
          />
        </SectionList>
        <Form />
      </Container>
    </>
  );
};
