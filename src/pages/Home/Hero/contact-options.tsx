import contactAction, { SocialIconInterface } from "#components/social-action/social-contact";

const contactOptions = () => {
  console.log({ contactAction });

  return (
    <ul className="social-icons absolute z-10 bottom-10 right-8">
      {contactAction.map((item: SocialIconInterface, i: number) => {
        return (
          <li className="p-3" key={i}>
            <a href={item.path} className="text-slate-50 xl:text-xl">
              <item.Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default contactOptions;
