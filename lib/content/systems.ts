import type { ImageAsset, LinkItem } from "@/types/content";
import { atlasStats } from "./atlas";

export type SystemSlug = "atlas-cms" | "atlas-lms" | "sonar" | "compass" | "hr-performance";
type TextSection = { heading: string; paragraphs: string[] };
type EvidenceItem = { title: string; caption: string; image?: ImageAsset };

export type CaseStudyContent = {
  eyebrow: string;
  heroLead: string;
  heroCta: LinkItem;
  glance: { system: string; focus: string; engagement: string; status: string };
  challenge: TextSection;
  solution: TextSection;
  workflow?: { heading: string; steps: { title: string; text: string }[] };
  capabilities: string[];
  role: TextSection;
  outcomes: string[];
  evidence: { items: EvidenceItem[]; note?: string };
  closing: { heading: string; copy?: string; cta: LinkItem };
  related: SystemSlug[];
};

export type SystemShowcaseItem = {
  slug: SystemSlug;
  title: string;
  category: string;
  product: string;
  description: string;
  image?: ImageAsset;
  carouselImage?: ImageAsset;
  visual?: "compass" | "performance";
  caseStudy: CaseStudyContent;
};

export const systemsShowcase = {
  headline: "Explore systems our teams have worked on.",
  intro:
    "Examples of our teams’ design, engineering and advisory work across learning, workforce management, election operations and infrastructure.",
} as const;

const contactHref = "/#contact" as const;
const cmsImage = {
  src: "/assets/atlas-cms-selected-work.png",
  alt: "Von Newman Atlas course management system visual",
  width: 1672,
  height: 941,
};
const lmsImage = {
  src: "/assets/atlas-lms-selected-work.png",
  alt: "Von Newman Atlas learning management system visual",
  width: 1672,
  height: 941,
};
const sonarImage = {
  src: "/assets/sonar-selected-work.png",
  alt: "Von Newman Sonar infrastructure reconciliation visual",
  width: 1600,
  height: 900,
};

export const systems: SystemShowcaseItem[] = [
  {
    slug: "atlas-cms",
    title: "Atlas CMS",
    category: "Content operations",
    product: "Atlas",
    description:
      "The content library and publishing system behind Atlas, built to organise video courses and distribute selected learning to Atlas or a client's compatible LMS.",
    image: cmsImage,
    carouselImage: cmsImage,
    caseStudy: {
      eyebrow: "CONTENT OPERATIONS · ATLAS",
      heroLead:
        "One system for organising engaging learning content and delivering the right courses to different organisations.",
      heroCta: { label: "Discuss your learning-content needs", href: contactHref },
      glance: {
        system: "Atlas CMS",
        focus: "Course creation, management and distribution",
        engagement: "Content strategy, product design and engineering",
        status: "Production-ready and supporting organisational learning programmes",
      },
      challenge: {
        heading: "A learning platform is only as useful as the content inside it.",
        paragraphs: [
          "Many organisations have access to an LMS but still struggle to keep employees interested in their courses. Training material is often distributed as lengthy PDFs, presentations or recordings that were not designed for focused digital learning.",
          "Creating better content introduces another challenge. Courses, videos, assessments and publication decisions must be organised in one place, while different organisations may require different selections from the same growing catalogue.",
          "Von Newman needed a content system that could support its own video production process, maintain a structured course library and deliver selected content to more than one learning environment.",
        ],
      },
      solution: {
        heading: "The content and publishing engine behind Atlas learning.",
        paragraphs: [
          "Atlas CMS provides a structured library for courses, short video lessons, quizzes and related learning material. Content teams can prepare and manage a course before it is released to learners.",
          "An organisation can select the courses relevant to its workforce. The approved content can then be published to that organisation's Atlas LMS environment or, where the client's platform is compatible and the integration is agreed, supplied to a separate LMS through an API.",
          "This separates content operations from learning delivery while keeping the two connected. Atlas CMS manages what is created and published; the receiving LMS manages the learner's access, progress and completion.",
        ],
      },
      workflow: {
        heading: "From subject matter to published course.",
        steps: [
          {
            title: "Plan the course",
            text: "Define the audience, learning objective and material the course must cover.",
          },
          {
            title: "Produce the lessons",
            text: "Turn the subject into concise video lessons and supporting learning material.",
          },
          {
            title: "Build the course",
            text: "Organise the lessons, quizzes and completion requirements in Atlas CMS.",
          },
          {
            title: "Review the content",
            text: "Check the course structure and material before publication.",
          },
          {
            title: "Select the destination",
            text: "Identify the organisation and learning environment that should receive the course.",
          },
          {
            title: "Publish or distribute",
            text: "Make the course available in Atlas LMS or deliver it to a compatible client LMS through an agreed API connection.",
          },
          {
            title: "Maintain the catalogue",
            text: "Update course information and learning material as requirements change.",
          },
        ],
      },
      capabilities: [
        "Structured management of courses and learning pathways.",
        "Organisation of short video lessons and supporting materials.",
        "Quiz and assessment configuration.",
        "Course metadata and catalogue management.",
        "Review and publishing workflows.",
        "Course selection for different organisations.",
        "Publishing into Atlas LMS.",
        "API-based distribution to compatible third-party learning platforms.",
        "Central maintenance of a growing learning-content library.",
      ],
      role: {
        heading: "Content production supported by purpose-built technology.",
        paragraphs: [
          "Von Newman designs and engineers Atlas CMS and produces the video-led learning material managed within it. The team structures source material for digital learning, develops short lessons, assembles courses and prepares them for distribution.",
          "The system has also been used to support contracted video-production work for government organisations, including programmes in which the completed material is prepared for delivery to the organisation's learning environment.",
        ],
      },
      outcomes: [
        "Maintain one organised source for learning content.",
        "Turn policies, manuals and specialist knowledge into watchable digital lessons.",
        "Select different course combinations for different organisations.",
        "Publish content to Atlas LMS without rebuilding each course.",
        "Supply approved courses to compatible external learning platforms through an agreed integration.",
        "Update and grow the catalogue as new learning requirements emerge.",
      ],
      evidence: {
        items: [
          {
            title: "Course catalogue",
            caption:
              "Courses, publishing status and organisational availability in one operational view.",
            image: {
              src: "/assets/atlas-cms-courses.png",
              alt: "Atlas CMS course catalogue showing publishing status and organisations",
              width: 2880,
              height: 1558,
            },
          },
          {
            title: "Course authoring",
            caption:
              "A focused workflow for setting up course information before content production begins.",
            image: {
              src: "/assets/atlas-cms-course-draft.png",
              alt: "Atlas CMS course authoring form for creating a new draft",
              width: 2880,
              height: 1558,
            },
          },
        ],
      },
      closing: {
        heading: "Give useful knowledge a better way to reach your people.",
        copy: "Talk to us about video-based course production, content management or delivery to your learning platform.",
        cta: { label: "Discuss your learning-content needs", href: contactHref },
      },
      related: ["atlas-lms", "hr-performance"],
    },
  },
  {
    slug: "atlas-lms",
    title: "Atlas LMS",
    category: "Learning delivery",
    product: "Atlas",
    description:
      "A multi-organisation learning platform that delivers engaging video courses, assessments and completion tracking without taking employees away from their day-to-day work.",
    image: lmsImage,
    carouselImage: lmsImage,
    caseStudy: {
      eyebrow: "LEARNING DELIVERY · ATLAS",
      heroLead:
        "Engaging workforce learning without the cost and disruption of sending employees away for every training need.",
      heroCta: { label: "Request an Atlas demonstration", href: contactHref },
      glance: {
        system: "Atlas LMS",
        focus: "Workforce learning and development",
        engagement: "Product strategy, design and engineering",
        status: "Production-ready and available to organisations",
      },
      challenge: {
        heading: "Make professional learning easier to access and easier to complete.",
        paragraphs: [
          "Organisations need to keep their people informed, capable and compliant. Traditional training can require international travel, accommodation and significant time away from work. That makes repeated or organisation-wide learning expensive and difficult to coordinate.",
          "Digital learning should provide an alternative, but the platform alone is not enough. Courses built mainly from long PDFs and presentations can be difficult to follow. Employees lose interest, postpone their learning or leave courses unfinished.",
          "The challenge was to create one learning environment that could serve different organisations while giving employees concise, engaging courses connected to their roles and responsibilities.",
        ],
      },
      solution: {
        heading: "A learning platform built around useful, watchable content.",
        paragraphs: [
          "Atlas LMS gives each organisation its own learning environment within a multi-organisation platform. Employees can see courses that are available, recommended or assigned to them and complete their learning through short video lessons and assessments.",
          "The system records progress through each course. Learners complete the required lessons and quizzes, meet the pass mark configured for that course or organisation, and receive a course-completion certificate when all requirements have been satisfied.",
          `Atlas currently contains ${atlasStats.pathways} learning pathways and ${atlasStats.courses} courses.`,
        ],
      },
      workflow: {
        heading: "From assigned course to verified completion.",
        steps: [
          {
            title: "Access relevant learning",
            text: "The learner signs in and sees available, recommended and assigned courses.",
          },
          {
            title: "Follow the course",
            text: "Short video lessons take the learner through the subject in manageable stages.",
          },
          {
            title: "Check understanding",
            text: "Quizzes between lessons help confirm that the learner has understood the material.",
          },
          {
            title: "Track progress",
            text: "The platform records completed lessons, assessments and overall course progress.",
          },
          {
            title: "Complete the requirements",
            text: "The learner must finish the required content and achieve the configured pass mark.",
          },
          {
            title: "Receive a completion certificate",
            text: "Atlas records successful completion and makes the course-completion certificate available to the learner.",
          },
        ],
      },
      capabilities: [
        "Separate learning environments for multiple organisations.",
        "Available, recommended and assigned course views.",
        "Short-form video lessons designed for sustained attention.",
        "Learning pathways for structured development.",
        "Quizzes and configurable assessment pass marks.",
        "Learner progress and course-completion tracking.",
        "Course-completion certificates.",
        "Administrative visibility into participation and progress.",
        "Content supplied through Atlas CMS.",
      ],
      role: {
        heading: "Product thinking, content and engineering in one team.",
        paragraphs: [
          "Von Newman defined the learning model, designed the learner and administrator experience, engineered the multi-organisation platform and continues to develop the product. The work also includes producing the video-based course content managed through Atlas CMS.",
          "This connection between platform development and content production means the learner experience is considered from course creation through to assessment and completion.",
        ],
      },
      outcomes: [
        "Deliver workforce learning without requiring travel for every training programme.",
        "Give employees access to courses within their normal working environment.",
        "Assign learning by organisational, departmental or role-based need.",
        "Replace document-heavy courses with concise video-led learning.",
        "Check understanding through assessments rather than relying on attendance alone.",
        "Give learning teams a clearer view of participation, progress and completion.",
      ],
      evidence: {
        items: [
          {
            title: "Learner dashboard",
            caption: "Assigned learning, progress, certificates and current activity in one view.",
            image: {
              src: "/assets/atlas-lms-dashboard.png",
              alt: "Atlas LMS learner dashboard showing assigned learning and progress",
              width: 2880,
              height: 1558,
            },
          },
          {
            title: "My learning",
            caption: "Assigned learning experiences arranged in the learner's course view.",
            image: {
              src: "/assets/atlas-lms-learning.png",
              alt: "Atlas LMS assigned-learning catalogue with course cards",
              width: 2880,
              height: 1558,
            },
          },
        ],
      },
      closing: {
        heading: "Give your workforce a clearer way to learn.",
        copy: "See how Atlas can support onboarding, professional development and organisation-wide training.",
        cta: { label: "Request an Atlas demonstration", href: contactHref },
      },
      related: ["atlas-cms", "sonar"],
    },
  },
  {
    slug: "sonar",
    title: "Von Newman Sonar",
    category: "Technology estate",
    product: "Sonar",
    description:
      "An infrastructure visibility platform that helps technology teams discover resources, establish ownership and review configuration from a clearer operational view.",
    image: sonarImage,
    carouselImage: sonarImage,
    caseStudy: {
      eyebrow: "TECHNOLOGY ESTATE · SONAR",
      heroLead:
        "A clearer view of infrastructure resources, ownership and configuration across the technology estate.",
      heroCta: { label: "Request a Sonar demonstration", href: contactHref },
      glance: {
        system: "Von Newman Sonar",
        focus: "Infrastructure visibility and ownership",
        engagement: "Product engineering and infrastructure consulting",
        status: "Production-ready",
      },
      challenge: {
        heading: "Technology teams cannot govern what they cannot clearly see.",
        paragraphs: [
          "As infrastructure grows across accounts, regions, cloud services and data-centre environments, information about individual resources can become fragmented. A resource may exist without a clear owner, connection to a business service or reviewed configuration record.",
          "That makes routine questions harder to answer: What are we running? Which team is responsible for it? What service does it support? Is its configuration managed in code? Where should a review begin?",
          "Sonar was created to bring this operating context into a clearer view for the people responsible for technology delivery and control.",
        ],
      },
      solution: {
        heading: "Connect infrastructure resources to ownership and operating context.",
        paragraphs: [
          "Von Newman Sonar discovers supported infrastructure resources and presents them in one operational view. Technology teams can connect resources to responsible teams, services and policies, making the estate easier to understand and review.",
          "For supported unmanaged resources, Sonar also helps teams examine the configuration and prepare it for a reviewed Terraform workflow. This gives infrastructure teams a practical route from discovery towards configuration managed as code.",
          "The product supports governance and cost conversations by making resource information and responsibility clearer. It does not automatically guarantee savings, security, compliance or resilience.",
        ],
      },
      workflow: {
        heading: "From resource discovery to informed action.",
        steps: [
          {
            title: "Connect a supported environment",
            text: "Authorised technology teams connect the accounts or environments included in the agreed scope.",
          },
          {
            title: "Discover resources",
            text: "Sonar maps supported infrastructure resources across the connected accounts and regions.",
          },
          {
            title: "Review the estate",
            text: "Teams inspect the resources, available metadata and operating context in one view.",
          },
          {
            title: "Establish ownership",
            text: "Resources are connected to responsible teams, services and relevant policies.",
          },
          {
            title: "Identify unmanaged configuration",
            text: "Teams can distinguish resources that require further configuration review.",
          },
          {
            title: "Review for Terraform",
            text: "A supported unmanaged resource can be examined and prepared for import into a reviewed Terraform configuration.",
          },
          {
            title: "Use the evidence",
            text: "Technology leaders can use the clearer inventory and ownership view to guide governance, configuration and cost decisions.",
          },
        ],
      },
      capabilities: [
        "Discovery of supported infrastructure resources.",
        "Visibility across connected accounts and regions.",
        "Resource inventory and operational context.",
        "Assignment of resources to responsible teams.",
        "Connections between resources, services and policies.",
        "Identification of supported unmanaged resources.",
        "Review and preparation for Terraform configuration.",
        "A shared view for infrastructure governance and cost discussions.",
      ],
      role: {
        heading: "Infrastructure consulting translated into a working product.",
        paragraphs: [
          "Von Newman defined the product model, designed the operational workflow and engineered Sonar. The work combines infrastructure knowledge with product design so that discovery data becomes useful to the teams responsible for ownership, governance and configuration.",
        ],
      },
      outcomes: [
        "Start infrastructure reviews from a clearer inventory.",
        "Make resource ownership visible to technology teams.",
        "Connect technical resources to the services and policies around them.",
        "Identify supported resources that are not yet managed through the intended configuration workflow.",
        "Give leaders a more reliable basis for governance and cost discussions.",
        "Move selected unmanaged resources towards reviewed Terraform configuration.",
      ],
      evidence: {
        items: [
          {
            title: "Estate overview",
            caption: "Resources discovered across connected demonstration environments.",
            image: {
              src: "/assets/sonar-inventory.jpg",
              alt: "Sonar estate inventory with sanitised demonstration data",
              width: 1400,
              height: 770,
            },
          },
          {
            title: "Configuration review",
            caption: "An unmanaged resource being reviewed for Terraform.",
            image: {
              src: "/assets/sonar-terraform.jpg",
              alt: "Sonar Terraform configuration review with demonstration data",
              width: 1400,
              height: 1131,
            },
          },
          {
            title: "Infrastructure summary",
            caption: "Information that helps a technology leader understand the current estate.",
            image: {
              src: "/assets/sonar-home.png",
              alt: "Sonar infrastructure summary with demonstration data",
              width: 1592,
              height: 777,
            },
          },
        ],
      },
      closing: {
        heading: "Start with a clearer view of your technology estate.",
        copy: "See how Sonar can help your team understand resources, ownership and configuration.",
        cta: { label: "Request a Sonar demonstration", href: contactHref },
      },
      related: ["atlas-lms", "compass"],
    },
  },
  {
    slug: "compass",
    title: "Von Newman Compass",
    category: "Election operations",
    product: "Compass",
    description:
      "An election management and monitoring system designed to give authorised operational teams a shared view of activity and progress.",
    visual: "compass",
    caseStudy: {
      eyebrow: "ELECTION OPERATIONS · COMPASS",
      heroLead:
        "A shared operational view designed to help authorised teams monitor election activity and progress.",
      heroCta: { label: "Discuss an operational system", href: contactHref },
      glance: {
        system: "Von Newman Compass",
        focus: "Election operations and monitoring",
        engagement: "Workflow design and application engineering",
        status: "Confirm with the product owner before publication",
      },
      challenge: {
        heading: "Give operational teams a common picture of activity and progress.",
        paragraphs: [
          "Election operations involve many activities, locations and authorised participants. When updates are fragmented, teams can find it difficult to understand the current position and identify where attention is needed.",
        ],
      },
      solution: {
        heading: "A monitoring system organised around the operational workflow.",
        paragraphs: [
          "Von Newman Compass is designed to bring authorised operational information into a shared view. Its structure is shaped around the activities, responsibilities and progress information the relevant teams need to monitor.",
        ],
      },
      capabilities: [],
      role: {
        heading: "Von Newman's role",
        paragraphs: [
          "Von Newman's role covers operational-workflow analysis, product design and application engineering. Confirm the exact engagement scope before publication.",
        ],
      },
      outcomes: [
        "Bring agreed operational activity into a shared view.",
        "Help authorised teams monitor progress from one system.",
        "Structure information around defined responsibilities and workflows.",
      ],
      evidence: {
        items: [],
        note: "Product screenshots will be published only after security and confidentiality review.",
      },
      closing: {
        heading: "Turn a complex operational workflow into a clearer system.",
        cta: { label: "Discuss an operational system", href: contactHref },
      },
      related: ["sonar", "hr-performance"],
    },
  },
  {
    slug: "hr-performance",
    title: "HR performance systems",
    category: "People and performance",
    product: "Consulting systems",
    description:
      "Workforce platforms that organise performance information into useful views for employees, managers, administrators and executive leaders.",
    visual: "performance",
    caseStudy: {
      eyebrow: "PEOPLE AND PERFORMANCE · CONSULTING SYSTEMS",
      heroLead:
        "Workforce platforms designed to give employees, managers and leaders information suited to the decisions they make.",
      heroCta: { label: "Discuss a workforce system", href: contactHref },
      glance: {
        system: "Custom workforce platforms",
        focus: "Performance information and role-based visibility",
        engagement: "Workflow consulting, product design and engineering",
        status: "Delivered as client-specific systems",
      },
      challenge: {
        heading: "Workforce information must be useful at every level of the organisation.",
        paragraphs: [
          "Performance information can be difficult to act on when it is spread across disconnected files, presented without context or shown in the same way to every user. Employees, managers, administrators and executives have different responsibilities and should not need to search through irrelevant information to understand what requires attention.",
        ],
      },
      solution: {
        heading: "Role-based views built around real performance workflows.",
        paragraphs: [
          "Von Newman designs workforce systems that organise staff and team information around the responsibilities of each user. Employees can focus on their own information, managers can understand their teams, administrators can maintain the process and executives can review the wider organisational picture.",
          "The precise workflow, measures, permissions and reports are defined for each organisation.",
        ],
      },
      capabilities: [
        "Role-based employee, manager, administrator and executive views.",
        "Staff and team information organised around responsibility.",
        "Administrative reporting and workflow support.",
        "Executive-level workforce visibility.",
        "Interface and workflow design adapted to organisational requirements.",
        "Access permissions appropriate to each user role.",
      ],
      role: {
        heading: "Von Newman's role",
        paragraphs: [
          "Von Newman works with stakeholders to understand the performance process, the information each role requires and the decisions the system must support. The team then designs the interface and engineers the application around the agreed workflow.",
        ],
      },
      outcomes: [
        "Replace fragmented performance information with clearer role-based views.",
        "Help managers see relevant team information in one place.",
        "Give administrators a more structured way to support the performance process.",
        "Give leaders an organisation-level view without exposing every detail to every user.",
      ],
      evidence: { items: [], note: "Illustrative interface — employee information is not shown." },
      closing: {
        heading: "Build a workforce system around the decisions your people make.",
        cta: { label: "Discuss a workforce system", href: contactHref },
      },
      related: ["atlas-cms", "compass"],
    },
  },
];
