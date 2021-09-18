const { Alice, Reply } = require("yandex-dialogs-sdk");
const alice = new Alice();

alice.any(async ctx => {
    const answers = [
        {
            text: "О чем речь",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/481d9251-083d-4723-9438-36a46e1d27df.opus">`
        },
        {
            text: "Мда",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/7b4aac4d-0637-47ee-bbed-c8627f88e287.opus">`
        },
        {
            text: "Иди нахуй",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/0150b6e5-87ae-45af-be41-648afd938466.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
});
alice.command("" ,async ctx => {
    return {
        text: "Привет от урбанички!",
        tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/ecbc0e29-14a9-430a-a603-effe273496a2.opus">`
    }
});
alice.command(/заверши|прекрати|останови (диалог|навык)/gi, ctx => Reply.text(`Скажите "хватит" или "стоп"!`));

alice.command(["Привет", "Хай", "Задрова"], async ctx => {
    const answers = [
        {
            text: "Здарова",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/8259cbe5-ad3f-4aae-9271-40f94278a5b0.opus">`
        },
        {
            text: "Ты кто",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/9f151ae8-58f9-47a0-b875-4ec40e71cba2.opus">`
        },
        {
            text: "Закрой ебало",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/e84de0f7-b896-4093-9c20-ec1e40ea092b.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
})
alice.command(["Пока", "ББ", "До свидания"], async ctx => {
    const answers = [
        {
            text: "Пока",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/8539964f-0fef-4334-b4b2-1f0d6ad94988.opus">`
        },
        {
            text: "Просто ухади",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/df70d60d-37fc-4cab-8771-bda99b1013fd.opus">`
        },
        {
            text: "Уйди ннчик",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/9a908372-0802-4ce3-b186-d3bc70afb8af.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
})
alice.command([
    "Ты даун", "Ты додик", "Ты долбаёб", "Ты НН",
    "Пошёл нахуй", "Иди нахуй", "Иди в пизду", "Иди в жопу",
    "НН", "ННчик", "Упал ННчик", "Упал нищ", "Нищ", "Гондон", "Пидарас", "Сука"
], async ctx => {
    const answers = [
        {
            text: "Мне по кайфу",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/c3808a1b-a57c-4a26-8263-ced4a486c919.opus">`
        },
        {
            text: "1 ннчик",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/3633ad6f-c954-4d5f-abf8-fd8a4a6e4dd9.opus">`
        },
        {
            text: "Чо с ебалом молодой",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/ee40c564-1c29-4f94-84a9-9dd82ca84802.opus">`
        },
        {
            text: "Не пукай ннчик",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/5d0e0d1c-35c0-4494-a96f-98c727516c65.opus">`
        },
        {
            text: "Сядь в тазик и не пукай",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/9db40f46-b911-40bb-8fa5-a9b40ddc94ac.opus">`
        },
        {
            text: "Закрой ебало",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/e84de0f7-b896-4093-9c20-ec1e40ea092b.opus">`
        },
        {
            text: "Собственно говоря",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/4a30a65c-4e0e-469e-a287-a0b1e4e10eab.opus">`
        },
        {
            text: "Иди нахуй",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/0150b6e5-87ae-45af-be41-648afd938466.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
})
alice.command(["Ты кто", "Кто ты", "Ты урбаничка"], async ctx => {
    const answers = [
        {
            text: "Кто я я Урбаничка",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/c0066816-06b9-4ea2-a7c7-53b84b6f0317.opus">`
        },
        {
            text: "Да Да Я",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/2e5ac209-0b81-49a9-8614-764a257914cd.opus">`
        },
        {
            text: "Сука",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/dc5ed1f8-33e1-4786-a779-08d084ddaab9.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
})
alice.command(["Кто я", "Кто я такой", "Скажи кто я"], async ctx => {
    const answers = [
        {
            text: "Ты разумный картофель",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/c0597343-2c9f-42fb-8db6-df1503da3d93.opus">`
        },
        {
            text: "Ты клоун",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/fd6a0f61-44d8-4e96-83aa-ae2216878e9b.opus">`
        },
        {
            text: "Ты какашка",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/80c60d79-9cfc-4574-89d8-a1d59aabb627.opus">`
        },
        {
            text: "Стримснайпер",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/6b019b7d-74b7-4248-8d0c-9ca360137153.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
})
alice.command(["Оцени код", "Оцени это", "Как это называется", "Что это за код"], async ctx => {
    const answers = [
        {
            text: "Самопис",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/38e73456-eecb-4703-b473-b2e1d454d7aa.opus">`
        },
        {
            text: "Все лик",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/0a39167c-ba6e-4b11-bf16-aaf4a585f4da.opus">`
        },
        {
            text: "Качественный контент",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/008c810b-e71a-46b7-aa53-443cef348792.opus">`
        },
        {
            text: "Епт твою мать эта клоунада",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/c76f532e-ccdc-4cc7-8d7e-3e2d1067ac5f.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
})
alice.command(["С новм годом", "Новый год"], async ctx => {
    const answers = [
        {
            text: "С новым годом",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/8aabf60f-da06-4e97-89e2-b744c0fb78c9.opus">`
        },
        {
            text: "С новым годом закрой ебало",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/2571870a-580c-4314-98c0-875c4cd77e47.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
})
alice.command(["Что ты хочешь", "Хочу есть"], async ctx => {
    const answers = [
        {
            text: "Хачу питцу",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/e96f27fe-4af1-46d3-a663-7b850210f3a5.opus">`
        },
        {
            text: "Пельмешки",
            tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/dadf16df-619c-4c14-8550-35c4b7c54391.opus">`
        }
    ]
    const answer = answers[Math.floor(Math.random()*answers.length)]
    return {
        text: answer.text,
        tts: answer.tts
    }
})

alice.command(["Кто такие читеры", "Ты читер"], async ctx => {
    return {
        text: "Читеры это те кто играют с читами",
        tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/ff727ff0-d95d-486a-886c-666f961eb84d.opus">`
    }
})
alice.command(["Кто такие админы", "Позови админа"], async ctx => {
    return {
        text: "Админ пидарас",
        tts: `<speaker audio="dialogs-upload/12c212b5-e980-4509-935b-ad679580f975/7b55691e-10ad-44e1-a443-0552b1e0fcb2.opus">`
    }
})

const server = alice.listen(5003, "/");