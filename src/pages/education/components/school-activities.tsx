import { SectionHeader } from "../../../components/header";
import Link from "../../../components/link";

function SchoolActivities() {
    const schoolActivities = [
        {
            school: "National University of Singapore",
            activities: (
                <>
                    <ul>
                        <li>
                            Was in <Link href="https://nus.edu.sg/osa/raffleshall">Raffles Hall</Link> in year 1 where I
                            played in the ultimate frisbee team, planed some spooky Halloween event, planed some events
                            for the Musical Production team, and learnt web development in RHDevs.
                        </li>
                        <li>
                            Is now in <Link href="https://www.nushackers.org/">NUS Hackers</Link> trying to spread the{" "}
                            <Link href="https://www.nushackers.org/hackerdefined/">hacker culture</Link> in NUS. I met a
                            lot of cool people here and listened to a bunch of interesting talks.
                        </li>
                        <li>
                            Joining the{" "}
                            <Link href="https://enterprise.nus.edu.sg/education-programmes/nus-overseas-colleges/">
                                NOC Programme
                            </Link>{" "}
                            soon!
                        </li>
                    </ul>
                </>
            ),
        },
        {
            school: "Hwa Chong Institution",
            activities: (
                <>
                    <ul>
                        <li>
                            Wrote a{" "}
                            <Link href="https://www.researchgate.net/publication/369501973_Does_Agent-Based_Modelling_or_System_Dynamics_Produce_More_Epistemically_Valuable_Knowledge_for_Policy-making_During_Uncertain_Times_A_Case_Study_on_the_Covid-19_Crisis?channel=doi&linkId=641de99fa1b72772e4252056&showFulltext=true">
                                paper
                            </Link>{" "}
                            about the epistemic value of different modelling paradigms for covid.
                        </li>
                        <li>
                            Wrote a{" "}
                            <Link href="https://www.researchgate.net/publication/369502012_Winner_Winner_Chicken_Dinner_A_comparative_analysis_on_the_ethicality_of_men_in_a_zero-sum_game_in_the_face_of_survival?channel=doi&linkId=641df42e92cfd54f8428bc29&showFulltext=true">
                                comparative analysis
                            </Link>{" "}
                            on the portrayal of ethics in two movies.
                        </li>
                        <li>
                            Represented the school for <Link href="https://thehague.thimun.org/">THIMUN</Link> in the
                            Netherlands.
                        </li>
                        <li>
                            Represented the school for the{" "}
                            <Link href="https://hrsy2021.weebly.com/">Humanities Research Symposium for Youth</Link> in
                            Brisbane, Australia.
                        </li>
                        <li>
                            Represented the school for a{" "}
                            <Link href="https://generationny.home.blog/2018/11/30/sea2-conference-brunei/">
                                conference
                            </Link>{" "}
                            in Brunei Darussalam.
                        </li>
                        <li>
                            Went for a 4-week long overseas immersion programme in China and had lots of fun with my
                            classmates.
                        </li>
                        <li>
                            Went for an exchange in Australia at a small town in Brisbane, staying with a students'
                            family for 1 week.
                        </li>
                        <li>
                            Organised activities as part of the school's faculty committee, boarders' council,
                            international scholar committee.
                        </li>
                        <li>Performed in 2 plays!</li>
                        <li>Played the flute and the trombone (very briefly) as part of the school band.</li>
                        <li>Played a lot of ultimate frisbee and football.</li>
                        <li>
                            Did a <Link href="https://hawkerflockers.wixsite.com/hawkerflockers">project</Link> to
                            promote hawker food (and mostly just filming hawker food reviews) which somehow won 3rd
                            place out of more than 500 groups.
                        </li>
                    </ul>
                </>
            ),
        },
    ];
    return (
        <div>
            <SectionHeader text="Some other interesting things I did in school" />
            {schoolActivities.map((activity, index) => (
                <div key={index} className="mb-4">
                    <h2 className="text-xl font-semibold text-blue-600">{activity.school}</h2>
                    <p className="text-gray-600 mt-2">{activity.activities}</p>
                </div>
            ))}
        </div>
    );
}

export default SchoolActivities;
