import contactAction, { SocialIconInterface } from "#components/social-action/social-contact";

const contactOptions = () => {
  console.log({ contactAction });

  return (
    <ul className="social-icons absolute bottom-10 right-8">
      {contactAction.map((item: SocialIconInterface, i: number) => {
        return (
          <li className="p-3">
            <a href={item.path}>
              <item.Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default contactOptions;
