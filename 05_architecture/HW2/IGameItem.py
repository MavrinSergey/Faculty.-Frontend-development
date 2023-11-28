import zope.interface


class IGameItem(zope.interface.Interface):
    def open(self):
        pass
