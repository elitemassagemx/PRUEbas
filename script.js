
    document.addEventListener('DOMContentLoaded', () => {
    const BASE_URL = "https://raw.githubusercontent.com/elitemassagemx/Home/main/ICONOS/";
    const services = {
    individual: [
        {
            title: "Aromaterapia",
            description: "Elige de nuestra selección de aceites esenciales pensados en tu relajación. Nuestras terapeutas combinan técnicas suaves que no te puedes perder.",
            benefits: ["Bajará tu Estrés", "Cambiará tu Ánimo", "Aliviarás Tensiones"],
            duration: "60 min",
            icon: `${BASE_URL}cfragancia2.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}aroma.JPG`,
            popupDescription: "La aromaterapia es una terapia holística que utiliza aceites esenciales naturales para promover la salud y el bienestar. Nuestras expertas terapeutas seleccionarán cuidadosamente los aceites más adecuados para ti, creando una experiencia personalizada que no solo relaja tu cuerpo, sino que también calma tu mente y eleva tu espíritu.",
            popupImage: `${BASE_URL}aroma.JPG`
        },
        {
            title: "Piedras Calientes",
            description: "Disfruta el calor de nuestras piedras lisas de Origen Volcánico, mientras tu terapeuta hace un masaje profundo.",
            benefits: ["Aliviarás Dolores Musculares", "Mejorarás tu Circulación", "Relajación Profunda"],
            duration: "60 min",
            icon: `${BASE_URL}rhpiedrasfloresvela.png`,
            benefitsIcons: [`${BASE_URL}sqpierna.png`, `${BASE_URL}ccirculacion.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}piedras-calientes-image.jpg`,
            popupDescription: "El masaje con piedras calientes es una terapia antigua que combina el masaje tradicional con el uso de piedras volcánicas lisas y calientes. El calor penetrante de las piedras ayuda a relajar los músculos en profundidad, permitiendo a nuestros terapeutas trabajar más efectivamente en las áreas de tensión. Esta terapia es particularmente efectiva para aliviar dolores musculares, mejorar la circulación y proporcionar una sensación de relajación profunda.",
            popupImage: `${BASE_URL}piedras-calientes-popup.jpg`
        },
        {
            title: "Piedras Frías",
            description: "Las manos expertas de nuestras terapeutas usarán piedras frías para estimular la circulación y reducir la inflamación.",
            benefits: ["Reducirás Inflamación", "Estrés", "Dolores Musculares"],
            duration: "60 min",
            icon: `${BASE_URL}rhpiedrasfrias.png`,
            benefitsIcons: [`${BASE_URL}cinflamacion`, `${BASE_URL}ccirculacion.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}piedras-frias-image.jpg`,
            popupDescription: "El masaje con piedras frías es una técnica refrescante que utiliza piedras de mármol enfriadas para reducir la inflamación, calmar los músculos y mejorar la circulación. Esta terapia es especialmente beneficiosa para aliviar el dolor muscular, reducir la hinchazón y proporcionar una sensación general de rejuvenecimiento.",
            popupImage: `${BASE_URL}piedras-frias-popup.jpg`
        },
        {
            title: "Espalda y Cuello",
            description: "Un enfoque especial para liberar tensiones acumuladas y relajarse profundamente.",
            benefits: ["Relajación", "Alivio de Dolores en Espalda y Cuello"],
            duration: "45 min",
            icon: `${BASE_URL}pinsuecia.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}noche.jpg`,
            popupDescription: "Este masaje focalizado se centra en las áreas que más comúnmente acumulan tensión: la espalda y el cuello. Utilizando una combinación de técnicas de masaje sueco y de puntos de presión, nuestros terapeutas trabajarán para liberar los nudos musculares, mejorar la flexibilidad y proporcionar un alivio inmediato del estrés y la tensión.",
            popupImage: `${BASE_URL}espalda-cuello-popup.jpg`
        },
        {
            title: "Sueco Relajante",
            description: "Ideal para una relajación completa, nuestras especialistas usarán técnicas de presión suaves para calmar el estrés.",
            benefits: ["Relajación Total", "Mejora Circulación Sanguínea"],
            duration: "80 min",
            icon: `${BASE_URL}pinsuecia.png`,
            benefitsIcons: [`${BASE_URL}ccirculacion.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}sueco-relajante-image.jpg`,
            popupDescription: "El masaje sueco es conocido por su capacidad para inducir una relajación profunda y aliviar la tensión muscular. Nuestros terapeutas utilizan una combinación de movimientos largos y fluidos, amasamiento y fricción circular para mejorar la circulación, flexibilidad y bienestar general. Este masaje es perfecto para aquellos que buscan un escape relajante del estrés diario.",
            popupImage: `${BASE_URL}sueco-relajante-popup.jpg`
        },
        {
            title: "Chocolaterapia",
            description: "Disfruta de sus propiedades antioxidantes con nuestra selección de lociones hechas de chocolate.",
            benefits: ["Hidratará tu Piel", "Multisensorial", "Relajación Profunda"],
            duration: "45 min",
            icon: `${BASE_URL}choco.png`,
            benefitsIcons: [`${BASE_URL}chidratacion.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}chocolaterapia-image.jpg`,
            popupDescription: "La chocolaterapia es un tratamiento lujoso que combina los beneficios del masaje con las propiedades nutritivas del chocolate. El cacao rico en antioxidantes ayuda a nutrir y rejuvenecer la piel, mientras que el aroma del chocolate induce una sensación de bienestar y relajación. Este tratamiento no solo es un placer para los sentidos, sino que también deja la piel suave, hidratada y con un brillo saludable.",
            popupImage: `${BASE_URL}chocolaterapia-popup.jpg`
        },
        {
            title: "Reflexología",
            description: "Centrado en tus pies, aplicando puntos de presión para estimular la salud general.",
            benefits: ["Mejorarás tu Equilibrio", "Reducirás el Estrés"],
            duration: "45 min",
            icon: `${BASE_URL}sqpieblanco.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}reflexologia-image.jpg`,
            popupDescription: "La reflexología es una técnica terapéutica que se centra en aplicar presión en puntos específicos de los pies que se corresponden con diferentes órganos y sistemas del cuerpo. Este tratamiento no solo proporciona una profunda relajación, sino que también puede ayudar a mejorar la circulación, reducir el estrés y promover un sentido general de bienestar en todo el cuerpo.",
            popupImage: `${BASE_URL}reflexologia-popup.jpg`
        },
        {
            title: "Aromas y Cera",
            description: "Disfruta de ceras aromáticas que se derriten y se aplican como aceites tibios sobre tu piel.",
            benefits: ["Hidratará tu Piel", "Relajación Profunda", "Multisensorial"],
            duration: "60 min",
            icon: `${BASE_URL}rcaromaterapia.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}chidratacion.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}aromas-cera-image.jpg`,
            popupDescription: "El tratamiento de Aromas y Cera es una experiencia sensorial única que combina los beneficios de la aromaterapia con las propiedades hidratantes de las ceras naturales. Las ceras aromáticas se calientan hasta convertirse en aceites tibios y se aplican suavemente sobre la piel, proporcionando una hidratación profunda y una relajación intensa. Los aromas cuidadosamente seleccionados ayudan a calmar la mente y elevar el espíritu.",
            popupImage: `${BASE_URL}aromas-cera-popup.jpg`
        },
        {
            title: "Lomi Lomi",
            description: "Masaje hawaiano con movimientos largos y fluidos, combinando estiramientos para relajar y revitalizar.",
            benefits: ["Relajación Profunda", "Aumento de Energía", "Mejora Circulación"],
            duration: "60 min",
            icon: `${BASE_URL}lomi.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}ccirculacion.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}lomi-lomi-image.jpg`,
            popupDescription: "El Lomi Lomi es un masaje tradicional hawaiano que utiliza movimientos largos, fluidos y rítmicos de los antebrazos y las manos para masajear el cuerpo. Esta técnica única no solo relaja profundamente los músculos, sino que también se dice que ayuda a liberar patrones de pensamiento negativos almacenados en el cuerpo. El resultado es una sensación de rejuvenecimiento tanto física como mental.",
            popupImage: `${BASE_URL}lomi-lomi-popup.jpg`
        },
        {
            title: "Shiatsu",
            description: "Inspirado en la medicina japonesa, este masaje utiliza presión de dedos y estiramientos para equilibrar la energía.",
            benefits: ["Estimulación de la Energía Vital", "Alivio de Tensiones"],
            duration: "90 min",
            icon: `${BASE_URL}shiatsu-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}shiatsu-image.jpg`,
            popupDescription: "El Shiatsu es una forma de terapia de presión originaria de Japón. Utiliza presión con los dedos, palmas, codos y a veces los pies en puntos específicos del cuerpo para equilibrar el flujo de energía vital o 'chi'. Este tratamiento no solo ayuda a aliviar la tensión muscular y el estrés, sino que también puede mejorar la circulación y promover una sensación general de bienestar y vitalidad.",
            popupImage: `${BASE_URL}shiatsu-popup.jpg`
        },
        {
            title: "Aceites de CBD",
            description: "Masaje con aceites de CBD para reducir la inflamación, aliviar el dolor y promover la relajación.",
            benefits: ["Alivio Dolor Muscular", "Reduce Ansiedad", "Calma Profunda"],
            duration: "60 min",
            icon: `${BASE_URL}sqfragancias.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}cbd-image.jpg`,
            popupDescription: "Nuestro masaje con aceites de CBD combina las técnicas de masaje tradicionales con los beneficios terapéuticos del cannabidiol (CBD). El CBD es conocido por sus propiedades antiinflamatorias y calmantes. Este tratamiento puede ayudar a aliviar el dolor muscular crónico, reducir la ansiedad y promover una sensación de calma y bienestar general. Es ideal para aquellos que buscan alivio del estrés y las molestias físicas.",
            popupImage: `${BASE_URL}cbd-popup.jpg`
        }
    ],
    pareja: [
        {
            title: "Aromaterapia para 2",
            description: "Disfruten de un masaje relajante mientras se sumergen en una atmósfera de calma con aceites esenciales que eligieron previamente. Este masaje combina técnicas suaves y aromaterapia promoviendo la relajación y el bienestar.",
            benefits: ["Reducirán Estrés", "Mejora en Estado de Ánimo", "Alivia Tensiones Musculares"],
            duration: "60 min",
            icon: `${BASE_URL}cfragancia2.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}aromaterapia-image.jpg`,
            popupDescription: "Experimenten juntos el poder relajante de la aromaterapia. En este masaje para parejas, podrán elegir entre una variedad de aceites esenciales cuidadosamente seleccionados para crear su atmósfera perfecta. Nuestros terapeutas expertos utilizarán técnicas suaves de masaje mientras los aromas elegidos envuelven sus sentidos, proporcionando una experiencia de relajación profunda y conexión mutua.",
            popupImage: `${BASE_URL}aromaterapia-pareja-popup.jpg`
        },
        {
            title: "Experiencia Piedras Calientes en Pareja",
            description: "Comparte el calor y relajación de un masaje con piedras lisas de Origen Volcánico colocadas sobre el cuerpo mientras reciben un masaje profundo. Ideal para momentos de unión, liberar tensiones y mejorar la circulación.",
            benefits: ["Alivio de dolores musculares", "mejora de la circulación sanguínea", "profundo estado de relajación"],
            duration: "60 min",
            icon: `${BASE_URL}piedras-calientes-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}ccirculacion.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}piedras-calientes-image.jpg`,
            popupDescription: "Sumérjanse juntos en una experiencia de calor y relajación profunda. Las piedras volcánicas calientes se colocan estratégicamente en puntos clave del cuerpo, combinadas con un masaje profundo que alivia la tensión muscular y mejora la circulación. Este tratamiento en pareja no solo proporciona beneficios físicos, sino que también crea un momento íntimo y relajante para compartir y conectar.",
            popupImage: `${BASE_URL}piedras-calientes-pareja-popup.jpg`
        },
        {
            title: "Liberan Cuello y Espalda",
            description: "Perfecto para liberar estrés y tensiones acumuladas. Masaje focalizado donde disfrutan y crean conexión.",
            benefits: ["Reducirán Rigidez", "Alivia Dolores Espalda y Cuello", "Sensación Relajación Compartida"],
            duration: "45 min",
            icon: `${BASE_URL}cuello-espalda-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}cuello-espalda-image.jpg`,
            popupDescription: "Este masaje focalizado es ideal para parejas que buscan aliviar la tensión en las áreas que más lo necesitan. Nuestros terapeutas se centrarán en liberar el estrés acumulado en el cuello y la espalda, utilizando técnicas específicas para reducir la rigidez y aliviar el dolor. Disfruten juntos de esta experiencia relajante y salgan sintiéndose renovados y conectados.",
            popupImage: `${BASE_URL}cuello-espalda-pareja-popup.jpg`
        },
        {
            title: "Masaje de Piedras Frías en Pareja",
            description: "Revitaliza su piel y estimula la circulación seguido de técnicas de masaje que promueven la relajación. Ideal para una experiencia memorable de revitalización.",
            benefits: ["Mejoras en la Piel", "Reduce Inflamación Estrés", "Alivio de Dolores Musculares"],
            duration: "60 min",
            icon: `${BASE_URL}piedras-frias-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}piedras-frias-image.jpg`,
            popupDescription: "Experimenten juntos la frescura revitalizante de nuestro masaje con piedras frías. Este tratamiento único combina el uso de piedras de mármol enfriadas con técnicas de masaje suave para estimular la circulación, reducir la inflamación y calmar los músculos cansados. Es especialmente refrescante después de un día caluroso o para aliviar el dolor muscular. Saldrán sintiéndose rejuvenecidos y con una sensación de frescura compartida.",
            popupImage: `${BASE_URL}piedras-frias-pareja-popup.jpg`
        },
        {
            title: "Sueco Relajante para 2",
            description: "Masaje con técnicas de presión y fricción suaves que alivian el estrés y mejoran tu circulación. Experiencia simultánea que refuerza vínculos.",
            benefits: ["Relajación General", "Mejora la Circulación", "Reduce Estrés"],
            duration: "80 min",
            icon: `${BASE_URL}sueco-relajante-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}ccirculacion.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}sueco-relajante-image.jpg`,
            popupDescription: "Disfruten juntos de la relajación profunda que ofrece nuestro masaje sueco en pareja. Este tratamiento utiliza movimientos largos y fluidos, amasamiento suave y fricción circular para aliviar la tensión muscular, mejorar la circulación y promover una relajación total. Es una experiencia perfecta para parejas que buscan un escape del estrés diario y un momento de conexión en un ambiente tranquilo y lujoso.",
            popupImage: `${BASE_URL}sueco-relajante-pareja-popup.jpg`
        },
        {
            title: "Chocolaterapia en Pareja",
            description: "Disfruta de un masaje indulgente con lociones a base de chocolate, conocido por sus propiedades antioxidantes. Este tratamiento es ideal para una experiencia sensorial completa.",
            benefits: ["Hidratación de la piel", "sensación de lujo", "relajación profunda"],
            duration: "45 min",
            icon: `${BASE_URL}chocolaterapia-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}chocolaterapia-image.jpg`,
            popupDescription: "Sumérjanse en el lujo y el placer con nuestra chocolaterapia en pareja. Este tratamiento indulgente utiliza productos a base de chocolate rico en antioxidantes para nutrir y rejuvenecer la piel. El aroma del chocolate no solo es delicioso, sino que también estimula la liberación de endorfinas, creando una sensación de felicidad y relajación. Disfruten juntos de esta experiencia sensorial única que dejará su piel suave, hidratada y con un delicioso aroma.",
            popupImage: `${BASE_URL}chocolaterapia-pareja-popup.jpg`
        },
        {
            title: "Masaje de Reflexología en Pareja",
            description: "Un enfoque en los pies que utiliza puntos de presión específicos para estimular la salud general del cuerpo. Ambos disfrutarán de este tratamiento revitalizante.",
            benefits: ["Mejora del equilibrio corporal", "alivio del estrés", "mejora de la salud general"],
            duration: "45 min",
            icon: `${BASE_URL}reflexologia-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}reflexologia-image.jpg`,
            popupDescription: "Experimenten juntos los beneficios de la reflexología, una técnica que se centra en puntos de presión específicos en los pies que corresponden a diferentes partes del cuerpo. Este tratamiento no solo proporciona una relajación profunda, sino que también puede ayudar a mejorar la circulación, reducir el estrés y promover un sentido de bienestar en todo el cuerpo. Es una forma única y relajante de cuidarse mutuamente y disfrutar de un momento de tranquilidad compartida.",
            popupImage: `${BASE_URL}reflexologia-pareja-popup.jpg`
        },
        {
            title: "Masaje con Aromas y Cera en Pareja",
            description: "Disfruta de un masaje acompañado de ceras aromáticas que se derriten en aceites tibios aplicados sobre la piel. Proporciona una experiencia sensorial completa con aroma, calor y tacto.",
            benefits: ["Hidratación de la piel", "relajación profunda", "experiencia sensorial enriquecida"],
            duration: "60 min",
            icon: `${BASE_URL}aromas-cera-icon.png`,
            benefitsIcons: [`${BASE_URL}chidratacion.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}dif.jpg`,
            popupDescription: "Sumérjanse juntos en una experiencia sensorial única con nuestro masaje de aromas y cera en pareja. Las ceras aromáticas cuidadosamente seleccionadas se calientan hasta convertirse en aceites tibios y se aplican suavemente sobre la piel, proporcionando una hidratación profunda y una relajación intensa. Los aromas envolventes crean una atmósfera de calma y bienestar, mientras que el calor de la cera ayuda a relajar los músculos tensos. Este tratamiento no solo nutre la piel, sino que también crea un momento íntimo y relajante para la pareja.",
            popupImage: `${BASE_URL}aromas-cera-pareja-popup.jpg`
        },
        {
            title: "Masaje Lomi Lomi en Pareja",
            description: "Este masaje hawaiano utiliza movimientos largos y fluidos, combinados con técnicas de estiramiento para relajar y revitalizar el cuerpo. Disfruta de una experiencia de conexión y armonía mientras ambos reciben el masaje simultáneamente.",
            benefits: ["Relajación profunda", "aumento de la energía", "mejora de la circulación"],
            duration: "60 min",
            icon: `${BASE_URL}lomi-lomi-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}ccirculacion.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}bat.jpg`,
            popupDescription: "Experimenten juntos la magia del masaje hawaiano Lomi Lomi. Este tratamiento único utiliza movimientos largos, fluidos y rítmicos que recorren todo el cuerpo, imitando las olas del océano. Los terapeutas usan no solo las manos, sino también los antebrazos para aplicar una presión profunda y relajante. El Lomi Lomi no solo relaja los músculos, sino que también se cree que ayuda a liberar patrones de pensamiento y emociones negativas, promoviendo una sensación de armonía y bienestar total.",
            popupImage: `${BASE_URL}lomi-lomi-pareja-popup.jpg`
        },
        {
            title: "Masaje Shiatsu en Pareja",
            description: "Basado en la medicina tradicional japonesa, este masaje utiliza la presión de los dedos y técnicas de estiramiento para equilibrar la energía del cuerpo. Se realiza en dos camillas o en una cama de masaje doble.",
            benefits: ["Estimulación de la energía vital", "alivio de tensiones", "mejora del bienestar general"],
            duration: "90 min",
            icon: `${BASE_URL}shiatsu-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}camas2.jpg`,
            popupDescription: "Descubran juntos los beneficios del Shiatsu, una forma de terapia japonesa que significa 'presión con los dedos'. En este tratamiento, los terapeutas aplican presión en puntos específicos del cuerpo para equilibrar el flujo de energía vital o 'chi'. El Shiatsu se realiza a través de la ropa cómoda y no utiliza aceites. Además de aliviar la tensión muscular y el estrés, este masaje puede mejorar la circulación, aliviar dolores de cabeza y promover una sensación general de bienestar y vitalidad. Es una experiencia única que les permitirá sentirse renovados y equilibrados juntos.",
            popupImage: `${BASE_URL}shiatsu-pareja-popup.jpg`
        },
        {
            title: "Masaje con Aceites de CBD en Pareja",
            description: "Un masaje que utiliza aceites infundidos con cannabidiol (CBD) para ayudar a reducir la inflamación, aliviar el dolor y promover la relajación.",
            benefits: ["Alivio del dolor muscular y articular", "reducción de la ansiedad", "relajación profunda"],
            duration: "60 min",
            icon: `${BASE_URL}cbd-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-icon.png`,
            image: `${BASE_URL}cbd-image.jpg`,
            popupDescription: "Experimenten juntos los beneficios terapéuticos del CBD con nuestro masaje en pareja. El cannabidiol (CBD) es conocido por sus propiedades antiinflamatorias y calmantes. Nuestros aceites de masaje infundidos con CBD se combinan con técnicas de masaje expertas para proporcionar un alivio profundo del dolor muscular y articular. Además de sus beneficios físicos, el CBD puede ayudar a reducir la ansiedad y promover una sensación de calma y bienestar. Este tratamiento es ideal para parejas que buscan una experiencia de relajación profunda y alivio del estrés físico y mental.",
            popupImage: `${BASE_URL}cbd-pareja-popup.jpg`
        }
    ],
    paquetes: [
        {
            title: "Paquete Romance Total",
            description: "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
            includes: ["Masaje en Pareja de Aromaterapia", "Copa de Vino", "Fresas con Chocolate", "Tabla de Quesos Gourmet"],
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: ["Relajación profunda", "experiencia sensorial completa", "momentos de disfrute compartido"],
            icon: `${BASE_URL}romance-total-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-romance-icon.png`,
            image: `${BASE_URL}paq1.jpg`,
            popupDescription: "El Paquete Romance Total es la experiencia definitiva para parejas que buscan un escape lujoso y relajante. Comienza con un masaje de aromaterapia en pareja de 90 minutos, donde los aceites esenciales cuidadosamente seleccionados crearán una atmósfera de relajación total. Después del masaje, disfruten de 30 minutos adicionales de indulgencia con una copa de vino selecto, fresas cubiertas de chocolate y una exquisita tabla de quesos gourmet. Este paquete está diseñado para nutrir tanto el cuerpo como el espíritu, ofreciendo un momento de conexión y lujo compartido.",
            popupImage: `${BASE_URL}romance-total-popup.jpg`
        },
        {
            title: "Paquete Romance Total 2",
            description: "Vivan una experiencia de masaje en pareja completa, con atención especial al detalle para un día inolvidable.",
            includes: ["Masaje en Pareja de Aromaterapia", "Sabor de Café (Latte, Capuchino, Expreso)", "Pastel o Tarta"],
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: ["Relajación profunda", "experiencia sensorial completa", "momentos de disfrute compartido"],
            icon: `${BASE_URL}romance-total2-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-romance2-icon.png`,
            image: `${BASE_URL}rosao.jpg`,
            popupDescription: "El Paquete Romance Total 2 ofrece una experiencia única de relajación y placer para parejas. Comienza con un lujoso masaje de aromaterapia en pareja de 90 minutos, donde los aceites esenciales cuidadosamente seleccionados crearán un ambiente de tranquilidad y bienestar. Después del masaje, disfruten de 30 minutos adicionales de indulgencia con su elección de café gourmet (Latte, Capuchino o Expreso) acompañado de un delicioso pastel o tarta. Este paquete combina perfectamente la relajación profunda con los placeres culinarios, creando un momento especial para compartir y conectar.",
            popupImage: `${BASE_URL}romance-total2-popup.jpg`
        },
        {
            title: "Paquete Lujo y Sabor",
            description: "Un paquete que combina técnicas de masaje de lujo con sabores exquisitos para un día de indulgencia.",
            includes: ["Masaje de Piedras Calientes en Pareja", "Copa de Vino", "Fresas con Chocolate", "Selección de Quesos y Vino"],
            duration: "90 minutos de masaje + 30 minutos para disfrutar de las delicias.",
            benefits: ["Alivio de tensiones", "degustación de sabores refinados", "experiencia de lujo"],
            icon: `${BASE_URL}lujo-sabor-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-lujo-icon.png`,
            image: `${BASE_URL}jamc.JPG`,
            popupDescription: "El Paquete Lujo y Sabor es una experiencia premium que combina el lujo de un masaje de piedras calientes con una degustación gourmet. Comienza con un relajante masaje de 90 minutos donde las piedras volcánicas calientes aliviarán profundamente la tensión muscular. Luego, disfruten de 30 minutos de pura indulgencia con una selección cuidadosamente curada de vinos finos, quesos artesanales y fresas bañadas en chocolate. Este paquete es perfecto para aquellos que buscan una experiencia que deleite todos los sentidos.",
            popupImage: `${BASE_URL}lujo-sabor-popup.jpg`
        },
        {
            title: "Paquete Sensaciones Inolvidables",
            description: "Un paquete pensado para ofrecer una experiencia sensorial completa con masajes, vino y sabores exquisitos.",
            includes: ["Masaje de Cuerpo Completo en Pareja", "Copa de Vino", "Fresas con Chocolate", "Tabla de Quesos Artísticos"],
            duration: "90 minutos de masaje + 45 minutos para disfrutar de las delicias.",
            benefits: ["Relajación total", "degustación gourmet", "experiencia romántica"],
            icon: `${BASE_URL}sensaciones-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-sensaciones-icon.png`,
            image: `${BASE_URL}chen.jpg`,
            popupDescription: "El Paquete Sensaciones Inolvidables es una experiencia diseñada para despertar todos sus sentidos. Comienza con un lujoso masaje de cuerpo completo en pareja de 90 minutos, que les dejará completamente relajados y renovados. Después, disfruten de 45 minutos de pura indulgencia con una copa de vino selecto, fresas cubiertas de chocolate y una exquisita tabla de quesos artísticos. Este paquete combina perfectamente la relajación profunda con una experiencia gastronómica refinada, creando recuerdos que perdurarán mucho después de que termine su visita.",
            popupImage: `${BASE_URL}sensaciones-inolvidables-popup.jpg`
        },
        {
            title: "Paquete Escape de Lujo",
            description: "Una escapada lujosa para parejas que buscan un día de relajación y disfrute.",
            includes: ["Masaje con Aromaterapia y Envoltura de Algas en Pareja", "Copa de Vino", "Fresas con Chocolate", "Tabla de Quesos y Frutas"],
            duration: "90 minutos de masaje + 30 minutos para degustar las delicias.",
            benefits: ["Relajación profunda", "desintoxicación", "experiencia culinaria exquisita"],
            icon: `${BASE_URL}escape-lujo-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-escape-icon.png`,
            image: `${BASE_URL}copas.jpg`,
            popupDescription: "El Paquete Escape de Lujo es la elección perfecta para parejas que buscan una experiencia de spa verdaderamente indulgente. Comienza con un masaje de aromaterapia relajante, seguido de una envoltura de algas desintoxicante. Este tratamiento de 90 minutos dejará su piel suave y su cuerpo completamente relajado. Después, disfruten de 30 minutos de placer culinario con una copa de vino selecto, fresas cubiertas de chocolate y una exquisita tabla de quesos y frutas frescas. Es la combinación perfecta de relajación, desintoxicación y placer gastronómico.",
            popupImage: `${BASE_URL}escape-lujo-popup.jpg`
        },
        {
            title: "Paquete Relax y Sabores",
            description: "Disfruta de un masaje relajante seguido de una experiencia gourmet para cerrar el día.",
            includes: ["Masaje de Reflexología en Pareja", "Copa de Vino", "Fresas con Chocolate", "Selección de Quesos"],
            duration: "60 minutos de masaje + 30 minutos para degustar.",
            benefits: ["Alivio del estrés", "disfrute sensorial", "conexión íntima"],
            icon: `${BASE_URL}relax-sabores-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-relax-icon.png`,
            image: `${BASE_URL}jamc.jpg`,
            popupDescription: "El Paquete Relax y Sabores ofrece una combinación perfecta de relajación y placer culinario. Comienza con un masaje de reflexología en pareja de 60 minutos, que alivia el estrés y promueve el bienestar general a través de la estimulación de puntos específicos en los pies. Después, disfruten de 30 minutos de indulgencia con una copa de vino selecto, fresas cubiertas de chocolate y una selección de quesos gourmet. Este paquete es ideal para parejas que buscan una experiencia relajante y romántica con un toque de sofisticación culinaria.",
            popupImage: `${BASE_URL}relax-sabores-popup.jpg`
        },
        {
            title: "Paquete Tranquilidad Gourmet",
            description: "Un paquete diseñado para ofrecer relajación total y sabores exquisitos en un entorno lujoso.",
            includes: ["Masaje con Aceites de CBD en Pareja", "Sabor de Café (Latte, Capuchino, Expreso)", "Pastel o Tarta"],
            duration: "60 minutos de masaje + 30 minutos para disfrutar.",
            benefits: ["Alivio del dolor", "relajación", "experiencia gourmet"],
            icon: `${BASE_URL}tranquilidad-gourmet-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-tranquilidad-icon.png`,
            image: `${BASE_URL}tranquilidad-gourmet-image.jpg`,
            popupDescription: "El Paquete Tranquilidad Gourmet combina los beneficios terapéuticos del CBD con una experiencia de café gourmet. Comienza con un masaje de 60 minutos utilizando aceites infundidos con CBD, conocidos por sus propiedades antiinflamatorias y relajantes. Después, disfruten de 30 minutos de placer culinario con su elección de café gourmet (Latte, Capuchino o Expreso) acompañado de un delicioso pastel o tarta. Este paquete es perfecto para parejas que buscan alivio del estrés y el dolor, junto con una experiencia de café de alta calidad.",
            popupImage: `${BASE_URL}tranquilidad-gourmet-popup.jpg`
        },
        {
            title: "Paquete Relajación y Gourmet",
            description: "Un paquete que combina técnicas de masaje para una relajación total con un toque gourmet.",
            includes: ["Masaje Sueco en Pareja", "Copa de Vino", "Fresas con Chocolate", "Selección de Quesos"],
            duration: "60 minutos de masaje + 30 minutos para degustar.",
            benefits: ["Relajación", "degustación", "toque especial"],
            icon: `${BASE_URL}relajacion-gourmet-icon.png`,
            benefitsIcons: [`${BASE_URL}benefits-icon1.png`, `${BASE_URL}benefits-icon2.png`, `${BASE_URL}benefits-icon3.png`],
            durationIcon: `${BASE_URL}duration-relajacion-icon.png`,
            image: `${BASE_URL}copas.jpg`,
            popupDescription: "El Paquete Relajación y Gourmet ofrece una experiencia completa de bienestar y placer culinario. Comienza con un masaje sueco en pareja de 60 minutos, utilizando técnicas de presión suave y movimientos largos para aliviar la tensión muscular y promover la relajación. Después, disfruten de 30 minutos de indulgencia con una copa de vino selecto, fresas cubiertas de chocolate y una selección de quesos finos. Este paquete es ideal para parejas que buscan una combinación perfecta de relajación física y placer gastronómico en un ambiente lujoso y romántico.",
            popupImage: `${BASE_URL}relajacion-gourmet-popup.jpg`
        },
    ]
};

    let currentPage = 1;
    const itemsPerPage = 3;
    let totalPages = Math.ceil(services.individual.length / itemsPerPage);

    function renderServices(category) {
        const servicesList = document.getElementById('services-list');
        if (!servicesList) {
            console.error('Element with id "services-list" not found');
            return;
        }
        servicesList.innerHTML = '';
        const template = document.getElementById('service-template');
        if (!template) {
            console.error('Element with id "service-template" not found');
            return;
        }

        services[category].forEach((service, index) => {
            if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
                const serviceElement = template.content.cloneNode(true);
                
                serviceElement.querySelector('.service-title').textContent = service.title;
                serviceElement.querySelector('.service-icon').src = service.icon;
                serviceElement.querySelector('.service-description').textContent = service.description;
                
                const benefitsList = serviceElement.querySelector('.benefits-list');
                service.benefits.forEach((benefit, index) => {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    if (service.benefitsIcons && service.benefitsIcons[index]) {
                        const icon = document.createElement('img');
                        icon.src = service.benefitsIcons[index];
                        icon.alt = benefit;
                        icon.className = 'benefit-icon';
                        li.prepend(icon);
                    }
                    benefitsList.appendChild(li);
                });
                
                serviceElement.querySelector('.duration-icon').src = service.durationIcon;
                serviceElement.querySelector('.service-duration-text').textContent = service.duration;

                const reserveButton = serviceElement.querySelector('.reserve-button');
                reserveButton.addEventListener('click', () => sendWhatsAppMessage('Reservar', service.title));

                const infoButton = serviceElement.querySelector('.info-button');
                infoButton.addEventListener('click', () => showPopup(service));

                servicesList.appendChild(serviceElement);
            }
        });

        updatePagination();
    }

    function renderPackages() {
        const packageList = document.getElementById('package-list');
        if (!packageList) {
            console.error('Element with id "package-list" not found');
            return;
        }
        packageList.innerHTML = '';
        services.paquetes.forEach(pkg => {
            const packageElement = document.createElement('div');
            packageElement.className = 'package-item';
            packageElement.innerHTML = `
                <div class="package-main">
                    <img src="${pkg.icon}" alt="${pkg.title}" class="package-icon">
                    <h3>${pkg.title}</h3>
                    <p>${pkg.description}</p>
                </div>
                <div class="package-includes">
                    <h4>Incluye:</h4>
                    <ul>${pkg.includes.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
                <div class="package-duration">
                    <img src="${pkg.durationIcon}" alt="Duración" class="duration-icon">
                    <p>${pkg.duration}</p>
                </div>
                <div class="package-benefits">
                    <h4>Beneficios:</h4>
                    <ul>${pkg.benefits.map((benefit, index) => `
                        <li>
                            ${pkg.benefitsIcons ? `<img src="${pkg.benefitsIcons[index]}" alt="${benefit}" class="benefit-icon">` : ''}
                            ${benefit}
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="package-buttons">
                    <button class="reserve-button">Reservar</button>
                    <button class="info-button">Saber más</button>
                </div>
            `;

            packageElement.querySelector('.reserve-button').addEventListener('click', () => sendWhatsAppMessage('Reservar', pkg.title));
            packageElement.querySelector('.info-button').addEventListener('click', () => showPopup(pkg));

            packageList.appendChild(packageElement);
        });
        setupPackagePagination();
    }

    function showPopup(data) {
        const popup = document.getElementById('popup');
        const popupTitle = document.getElementById('popup-title');
        const popupImage = document.getElementById('popup-image');
        const popupDescription = document.getElementById('popup-description');

        popupTitle.textContent = data.title || '';
        popupImage.src = data.popupImage || data.image || '';
        popupImage.alt = data.title || '';
        popupDescription.textContent = data.popupDescription || data.description || '';

        popup.style.display = 'flex';
    }

    function sendWhatsAppMessage(action, serviceTitle) {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    }

    function updatePagination() {
        const paginationContainer = document.querySelector('.pagination-container');
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = `little-dot${i === currentPage ? ' active' : ''}`;
            dot.addEventListener('click', () => {
                currentPage = i;
                const activeCategory = document.querySelector('.choice-chip.active').dataset.category;
                renderServices(activeCategory);
            });
            paginationContainer.appendChild(dot);
        }
    }

    function changePage(direction) {
        currentPage += direction;
        if (currentPage < 1) currentPage = totalPages;
        if (currentPage > totalPages) currentPage = 1;
        const activeCategory = document.querySelector('.choice-chip.active').dataset.category;
        renderServices(activeCategory);
    }

    function setupAccordion() {
        const accordionItems = document.querySelectorAll('.accordion .link');
        accordionItems.forEach(item => {
            item.addEventListener('click', function() {
                const parent = this.parentElement;
                parent.classList.toggle('open');
                const submenu = this.nextElementSibling;
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            });
        });
    }

    function setupExperiencias() {
        const experienciasContainer = document.querySelector('.checkbox-group');
        const experiencias = [
            { name: 'Masaje Relajante', icon: 'massage' },
            { name: 'Aromaterapia', icon: 'spa' },
            { name: 'Piedras Calientes', icon: 'hot-tub' },
            { name: 'Reflexología', icon: 'foot' },
            { name: 'Masaje en Pareja', icon: 'people' }
        ];

        experiencias.forEach(exp => {
            const checkboxDiv = document.createElement('div');
            checkboxDiv.className = 'checkbox';
            checkboxDiv.innerHTML = `
                <label class="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input" name="experiencia" value="${exp.name}">
                    <span class="checkbox-tile">
                        <span class="checkbox-icon">
                            <i class="fa fa-${exp.icon}"></i>
                        </span>
                        <span class="checkbox-label">${exp.name}</span>
                    </span>
                </label>
            `;
            experienciasContainer.appendChild(checkboxDiv);
        });

        const checkboxes = document.querySelectorAll('.checkbox-input');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const tile = this.nextElementSibling;
                tile.classList.toggle('checked', this.checked);
            });
        });
    }

    function createVenetianBlinds() {
        const venetianContainer = document.querySelector('.venetian-blinds');
        if (!venetianContainer) {
            console.error('Venetian blinds container not found');
            return;
        }
        
        venetianContainer.innerHTML = '';
        const image1 = `${BASE_URL}chem.JPG`;
        const image2 = `${BASE_URL}venetian-image2.jpg`;
        
        for (let i = 0; i < 10; i++) {
            const blind = document.createElement('div');
            blind.className = 'blind';
            blind.style.left = `${i * 10}%`;
            blind.style.backgroundImage = `url(${image1})`;
            blind.style.backgroundPosition = `${i * -10}% 0`;
            
            blind.addEventListener('mouseover', () => {
                blind.style.backgroundImage = `url(${image2})`;
            });
            
            blind.addEventListener('mouseout', () => {
                blind.style.backgroundImage = `url(${image1})`;
            });
            
            venetianContainer.appendChild(blind);
        }
    }

    function setupVenetianBlinds() {
        const venetianLink = document.querySelector('.accordion .link:contains("Explora")');
        if (venetianLink) {
            venetianLink.addEventListener('click', function() {
                const venetianContainer = document.querySelector('.venetian-blinds');
                if (venetianContainer) {
                    venetianContainer.style.display = venetianContainer.style.display === 'none' ? 'block' : 'none';
                } else {
                    createVenetianBlinds();
                }
            });
        }
    }

    function setupGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const popup = document.getElementById('popup');
        const popupImage = document.getElementById('popup-image');
        const popupTitle = document.getElementById('popup-title');
        const popupDescription = document.getElementById('popup-description');
        const closePopup = document.querySelector('.close');

        galleryItems.forEach(item => {
            const icon = item.querySelector('.gallery-icon');
            icon.addEventListener('click', () => {
                const img = item.querySelector('img');
                popupImage.src = img.src;
                popupTitle.textContent = img.alt;
                popupDescription.textContent = "Descripción de la imagen..."; // Puedes personalizar esto
                popup.style.display = 'flex';
            });
        });

        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    }

    function setupLanguageSelector() {
        const translateIcon = document.getElementById('translate-icon');
        const languageOptions = document.querySelector('.language-options');

        translateIcon.addEventListener('click', () => {
            languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                changeLanguage(lang);
                languageOptions.style.display = 'none';
            });
        });
    }

    function changeLanguage(lang) {
        console.log(`Cambiando idioma a: ${lang}`);
        updateContent(lang);
    }

    function updateContent(lang) {
        const translations = {
            es: {
                title: "Elite Massage",
                welcome: "Bienvenido a tu Oasis de Tranquilidad",
                services: "Nuestros Servicios",
                packages: "Paquetes Especiales",
                experiences: "Experiencias",
                gallery: "Galería de Imágenes",
                contact: "Contacto"
            },
            en: {
                title: "Elite Massage",
                welcome: "Welcome to your Oasis of Tranquility",
                services: "Our Services",
                packages: "Special Packages",
                experiences: "Experiences",
                gallery: "Image Gallery",
                contact: "Contact"
            },
            fr: {
                title: "Elite Massage",
                welcome: "Bienvenue dans votre Oasis de Tranquillité",
                services: "Nos Services",
                packages: "Forfaits Spéciaux",
                experiences: "Expériences",
                gallery: "Galerie d'Images",
                contact: "Contact"
            }
        };

        document.querySelector('h1').textContent = translations[lang].title;
        document.querySelector('#inicio h2').textContent = translations[lang].welcome;
        document.querySelector('#servicios h2').textContent = translations[lang].services;
        document.querySelector('#paquetes h2').textContent = translations[lang].packages;
        document.querySelector('#experiencias h2').textContent = translations[lang].experiences;
        document.querySelector('#galeria h2').textContent = translations[lang].gallery;
        document.querySelector('#contacto h2').textContent = translations[lang].contact;
    }

    function setupMobileMenu() {
        const menuToggle = document.getElementById('menu-toggle');
        const accordion = document.getElementById('accordion');

        menuToggle.addEventListener('click', () => {
            accordion.classList.toggle('active');
        });
    }

    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    function setupPackagePagination() {
        const packageList = document.getElementById('package-list');
        const packages = Array.from(packageList.children);
        const itemsPerPage = 3;
        let currentPage = 1;

        function showPage(page) {
            const startIndex = (page - 1)


            

    
    let currentPage = 1;
    const itemsPerPage = 3;
    let totalPages = Math.ceil(services.individual.length / itemsPerPage);

    function renderServices(category) {
        const servicesList = document.getElementById('services-list');
        if (!servicesList) {
            console.error('Element with id "services-list" not found');
            return;
        }
        servicesList.innerHTML = '';
        const template = document.getElementById('service-template');
        if (!template) {
            console.error('Element with id "service-template" not found');
            return;
        }

        services[category].forEach((service, index) => {
            if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
                const serviceElement = template.content.cloneNode(true);
                
                serviceElement.querySelector('.service-title').textContent = service.title;
                serviceElement.querySelector('.service-icon').src = service.icon;
                serviceElement.querySelector('.service-description').textContent = service.description;
                
                const benefitsList = serviceElement.querySelector('.benefits-list');
                service.benefits.forEach(benefit => {
                    const li = document.createElement('li');
                    li.textContent = benefit;
                    benefitsList.appendChild(li);
                });
                
                serviceElement.querySelector('.duration-icon').src = service.durationIcon;
                serviceElement.querySelector('.service-duration-text').textContent = service.duration;

                const reserveButton = serviceElement.querySelector('.reserve-button');
                reserveButton.addEventListener('click', () => sendWhatsAppMessage('Reservar', service.title));

                const infoButton = serviceElement.querySelector('.info-button');
                infoButton.addEventListener('click', () => showPopup(service));

                servicesList.appendChild(serviceElement);
            }
        });

        updatePagination();
    }

    function renderPackages() {
        const packageList = document.getElementById('package-list');
        if (!packageList) {
            console.error('Element with id "package-list" not found');
            return;
        }
        packageList.innerHTML = '';
        services.paquetes.forEach(pkg => {
            const packageElement = document.createElement('div');
            packageElement.className = 'package-item';
            packageElement.innerHTML = `
                <h3>${pkg.title}</h3>
                <p>${pkg.description}</p>
                <p><strong>Incluye:</strong> ${pkg.includes.join(', ')}</p>
                <p><strong>Duración:</strong> ${pkg.duration}</p>
                <p><strong>Beneficios:</strong> ${pkg.benefits.join(', ')}</p>
                <button class="reserve-button">Reservar</button>
                <button class="info-button">Saber más</button>
            `;

            packageElement.querySelector('.reserve-button').addEventListener('click', () => sendWhatsAppMessage('Reservar', pkg.title));
            packageElement.querySelector('.info-button').addEventListener('click', () => showPopup(pkg));

            packageList.appendChild(packageElement);
        });
    }

    function showPopup(data) {
        const popup = document.getElementById('popup');
        const popupTitle = document.getElementById('popup-title');
        const popupImage = document.getElementById('popup-image');
        const popupDescription = document.getElementById('popup-description');

        popupTitle.textContent = data.title || '';
        popupImage.src = data.popupImage || data.image || '';
        popupImage.alt = data.title || '';
        popupDescription.textContent = data.popupDescription || data.description || '';

        popup.style.display = 'block';
    }

    function sendWhatsAppMessage(action, serviceTitle) {
        const message = encodeURIComponent(`Hola! Quiero ${action} un ${serviceTitle}`);
        const url = `https://wa.me/5215640020305?text=${message}`;
        window.open(url, '_blank');
    }

    function updatePagination() {
        const paginationContainer = document.querySelector('.pagination-container');
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = `little-dot${i === currentPage ? ' active' : ''}`;
            paginationContainer.appendChild(dot);
        }
    }

    function changePage(direction) {
        currentPage += direction;
        if (currentPage < 1) currentPage = totalPages;
        if (currentPage > totalPages) currentPage = 1;
        const activeCategory = document.querySelector('.choice-chip.active').dataset.category;
        renderServices(activeCategory);
    }

    // Acordeón
    const accordionItems = document.querySelectorAll('.accordion .link');
    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('open');
            const submenu = this.nextElementSibling;
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });

    // Experiencias (Checkbox)
    const checkboxes = document.querySelectorAll('.checkbox-input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const tile = this.nextElementSibling;
            if (this.checked) {
                tile.classList.add('checked');
            } else {
                tile.classList.remove('checked');
            }
        });
    });

    // Efecto Venetian Blinds
    function createVenetianBlinds() {
        const venetianContainer = document.querySelector('.venetian-blinds');
        if (!venetianContainer) {
            console.error('Venetian blinds container not found');
            return;
        }
        
        for (let i = 0; i < 10; i++) {
            const blind = document.createElement('div');
            blind.className = 'blind';
            blind.style.left = `${i * 10}%`;
            blind.style.backgroundPosition = `${i * -10}% 0`;
            
            venetianContainer.appendChild(blind);
        }
    }

    // Galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const closePopup = document.querySelector('.close');

    galleryItems.forEach(item => {
        const icon = item.querySelector('.gallery-icon');
        icon.addEventListener('click', () => {
            const img = item.querySelector('img');
            popupImage.src = img.src;
            popupTitle.textContent = img.alt;
            popupDescription.textContent = "Descripción de la imagen..."; // Puedes personalizar esto
            popup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Cierra el popup si se hace clic fuera de él
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Widget de traducción
    const translateIcon = document.getElementById('translate-icon');
    const languageOptions = document.querySelector('.language-options');

    translateIcon.addEventListener('click', () => {
        languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            changeLanguage(lang);
            languageOptions.style.display = 'none';
        });
    });

    function changeLanguage(lang) {
        console.log(`Cambiando idioma a: ${lang}`);
        updateContent(lang);
    }

    function updateContent(lang) {
        const translations = {
            es: {
                title: "Elite Massage",
                welcome: "Bienvenido a tu Oasis de Tranquilidad",
                // ... más traducciones
            },
            en: {
                title: "Elite Massage",
                welcome: "Welcome to your Oasis of Tranquility",
                // ... más traducciones
            },
            // ... otros idiomas
        };

        document.querySelector('h1').textContent = translations[lang].title;
        document.querySelector('#inicio h2').textContent = translations[lang].welcome;
        // ... actualizar más elementos
    }

    // Botón de menú para dispositivos móviles
    const menuToggle = document.getElementById('menu-toggle');
    const accordion = document.getElementById('accordion');

    menuToggle.addEventListener('click', () => {
        accordion.classList.toggle('active');
    });

    // Smooth Scroll
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'), 1000);
        });
    });

    // Event Listeners
    document.querySelector('.btn--prev').addEventListener('click', () => changePage(-1));
    document.querySelector('.btn--next').addEventListener('click', () => changePage(1));

    document.querySelectorAll('.choice-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.choice-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.dataset.category);
        });
    });

    // Paginación de paquetes
    function setupPackagePagination() {
        const packageList = document.getElementById('package-list');
        const packages = Array.from(packageList.children);
        const itemsPerPage = 3;
        let currentPage = 1;

        function showPage(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            packages.forEach((pkg, index) => {
                pkg.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
            });
        }

        function setupPaginationButtons() {
            const pageCount = Math.ceil(packages.length / itemsPerPage);
            const paginationContainer = document.createElement('div');
            paginationContainer.className = 'pagination-container';
            
            for (let i = 1; i <= pageCount; i++) {
                const pageButton = document.createElement('button');
                pageButton.innerText = i;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    showPage(currentPage);
                    updatePaginationButtons();
                });
                paginationContainer.appendChild(pageButton);
            }
            
            packageList.after(paginationContainer);
        }

        function updatePaginationButtons() {
            const buttons = document.querySelectorAll('.pagination-container button');
            buttons.forEach((button, index) => {
                button.classList.toggle('active', index + 1 === currentPage);
            });
        }

        showPage(currentPage);
        setupPaginationButtons();
        updatePaginationButtons();
    }

// Función de inicialización actualizada
function init() {
    renderServices('individual');
    renderPackages();
    createVenetianBlinds();
    updatePagination();
    setupPackagePagination();
    setupVenetianBlinds();
    setupExperiencias();
    setupWhatsAppButtons();

    // Añadir barra de beneficios destacados para paquetes
    const benefitsBar = document.createElement('div');
    benefitsBar.className = 'benefits-bar';
    benefitsBar.innerHTML = `
        <h3>Beneficios Destacados de Paquetes</h3>
        <ul>
            <li>Experiencias premium</li>
            <li>Ahorro en servicios combinados</li>
            <li>Atención personalizada</li>
        </ul>
    `;
    const paquetesSection = document.querySelector('#paquetes');
    if (paquetesSection) {
        const paginationContainer = paquetesSection.querySelector('.pagination-container');
        if (paginationContainer) {
            paginationContainer.after(benefitsBar);
        } else {
            paquetesSection.appendChild(benefitsBar);
        }
    }

    // Event Listeners
    document.querySelector('.btn--prev').addEventListener('click', () => changePage(-1));
    document.querySelector('.btn--next').addEventListener('click', () => changePage(1));

    document.querySelectorAll('.choice-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.choice-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.dataset.category);
        });
    });
}

// Llamada a la función de inicialización
document.addEventListener('DOMContentLoaded', init);
function showPage(page) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            packages.forEach((pkg, index) => {
                pkg.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
            });
        }

        function setupPaginationButtons() {
            const pageCount = Math.ceil(packages.length / itemsPerPage);
            const paginationContainer = document.createElement('div');
            paginationContainer.className = 'pagination-container';
            
            for (let i = 1; i <= pageCount; i++) {
                const pageButton = document.createElement('button');
                pageButton.innerText = i;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    showPage(currentPage);
                    updatePaginationButtons();
                });
                paginationContainer.appendChild(pageButton);
            }
            
            packageList.after(paginationContainer);
        }

        function updatePaginationButtons() {
            const buttons = document.querySelectorAll('.pagination-container button');
            buttons.forEach((button, index) => {
                button.classList.toggle('active', index + 1 === currentPage);
            });
        }

        showPage(currentPage);
        setupPaginationButtons();
        updatePaginationButtons();
    }

    function setupWhatsAppButtons() {
        const reserveButtons = document.querySelectorAll('.reserve-button');
        reserveButtons.forEach(button => {
            button.addEventListener('click', function() {
                const serviceName = this.closest('.service-item, .package-item').querySelector('h3').textContent;
                sendWhatsAppMessage('Reservar', serviceName);
            });
        });
    }

    function init() {
        renderServices('individual');
        renderPackages();
        createVenetianBlinds();
        updatePagination();
        setupPackagePagination();
        setupVenetianBlinds();
        setupExperiencias();
        setupWhatsAppButtons();
        setupAccordion();
        setupGallery();
        setupLanguageSelector();
        setupMobileMenu();

        // Añadir barra de beneficios destacados para paquetes
        const benefitsBar = document.createElement('div');
        benefitsBar.className = 'benefits-bar';
        benefitsBar.innerHTML = `
            <h3>Beneficios Destacados de Paquetes</h3>
            <ul>
                <li>Experiencias premium</li>
                <li>Ahorro en servicios combinados</li>
                <li>Atención personalizada</li>
            </ul>
        `;
        const paquetesSection = document.querySelector('#paquetes');
        if (paquetesSection) {
            const paginationContainer = paquetesSection.querySelector('.pagination-container');
            if (paginationContainer) {
                paginationContainer.after(benefitsBar);
            } else {
                paquetesSection.appendChild(benefitsBar);
            }
        }

        // Event Listeners
        document.querySelector('.btn--prev').addEventListener('click', () => changePage(-1));
        document.querySelector('.btn--next').addEventListener('click', () => changePage(1));

        document.querySelectorAll('.choice-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.choice-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                renderServices(chip.dataset.category);
            });
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                smoothScroll(this.getAttribute('href'), 1000);
            });
        });
    }

    // Llamada a la función de inicialización
    init();
});
