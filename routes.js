import HeroesController from "./controllers/HeroesController";

const heroesController = new HeroesController()

export default [
    {
        method: 'GET',
        path: '/heroes',
        handler: function (request, h) {
            return heroesController.list()
        }
    },
    {
        method: 'POST',
        path: '/heroes',
        handler: function (request, h) {
            return heroesController.create()
        }
    },
    {
        method: 'GET',
        path: '/heroes/{id}',
        handler: function (request, h) {
            return heroesController.retrieve()
        }
    },
    {
        method: 'PUT',
        path: '/heroes/{id}',
        handler: function (request, h) {
            return heroesController.update()
        }
    },
    {
        method: 'DELETE',
        path: '/heroes/{id}',
        handler: function (request, h) {
            return heroesController.delete()
        }
    }
]
